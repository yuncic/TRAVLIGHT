import { COUNTRIES } from '../../data/countries';

interface CountryChipsProps {
  selectedCountryId: string;
  onSelect: (id: string) => void;
  /** 컨테이너에 얹을 추가 클래스 (모바일/데스크탑 노출 제어) */
  className?: string;
}

/**
 * 전체 국가를 한 번의 탭으로 전환하는 퀵픽 칩.
 * 데스크탑 헤더 내부와 모바일 상단바 두 곳에서 재사용한다.
 */
export function CountryChips({ selectedCountryId, onSelect, className = '' }: CountryChipsProps) {
  return (
    <div className={className}>
      {COUNTRIES.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`focus-ring shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
            selectedCountryId === c.id
              ? 'bg-slate-800 border-slate-800 text-white'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
          }`}
        >
          <span>{c.flag}</span>
          {c.name}
        </button>
      ))}
    </div>
  );
}
