import { useEffect, useRef } from 'react';
import { CONTINENTS } from '../../data/continents';
import { useCountryFilter } from '../../hooks/useCountryFilter';

interface CountrySelectorModalProps {
  selectedCountryId: string;
  onSelectCountry: (id: string) => void;
  onClose: () => void;
}

/**
 * 국가 선택 모달 (모바일: 바텀시트 / 데스크탑: 중앙 다이얼로그).
 * 검색·대륙 필터 상태는 이 모달이 소유하므로, 닫혔다 다시 열면 자동 초기화된다.
 * 렌더 조건(isOpen)은 부모가 관리한다.
 */
export function CountrySelectorModal({ selectedCountryId, onSelectCountry, onClose }: CountrySelectorModalProps) {
  const { searchQuery, setSearchQuery, activeContinent, setActiveContinent, filteredCountries } = useCountryFilter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Escape로 닫기 + 열릴 때 검색창 자동 포커스
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const t = window.setTimeout(() => searchInputRef.current?.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(t);
    };
  }, [onClose]);

  const handleSelect = (id: string) => {
    onSelectCountry(id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex flex-col justify-end lg:justify-center lg:items-center lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="여행 국가 선택"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-[30px] lg:rounded-[30px] shadow-float max-h-[85%] lg:max-h-full lg:w-full lg:max-w-2xl flex flex-col animate-slide-up pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-800">어느 나라로 떠나시나요?</h3>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="focus-ring p-1 text-slate-400 hover:text-slate-600 active:scale-90"
          >
            <i className="ph ph-x text-2xl" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4 bg-slate-50/50 border-b border-slate-100">
          <div className="relative">
            <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="가고 싶은 여행 국가 검색 (예: 일본, 호주)"
              aria-label="국가 검색"
              className="focus-ring w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 placeholder:text-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="검색어 지우기"
                className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <i className="ph-fill ph-x-circle text-lg" />
              </button>
            )}
          </div>

          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {CONTINENTS.map((con) => (
              <button
                key={con.id}
                onClick={() => setActiveContinent(con.id)}
                className={`focus-ring px-4 py-2 shrink-0 rounded-xl text-xs font-black transition-all ${
                  activeContinent === con.id
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'bg-white text-slate-400 border border-slate-200 hover:text-slate-600'
                }`}
              >
                {con.name}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[400px] px-5 py-4 no-scrollbar">
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredCountries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.id)}
                  className={`focus-ring p-4 flex flex-col items-start gap-1.5 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-95 ${
                    selectedCountryId === c.id
                      ? 'bg-brand-50 border-brand-500 text-brand-600'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <p className="text-sm font-extrabold text-slate-800">{c.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-0.5">{c.englishName}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400">
              <i className="ph ph-globe-hemisphere-west text-4xl mb-2 text-slate-300" />
              <p className="text-sm font-bold">검색 결과가 없습니다.</p>
              <p className="text-xs mt-1">철자를 확인하거나 다른 검색어를 입력해보세요.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
