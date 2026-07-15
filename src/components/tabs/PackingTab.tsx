import type { Country } from '../../types/country';
import type { UsePackingReturn } from '../../hooks/usePacking';
import { SectionHeader } from '../common/SectionHeader';
import { TempRangeBar } from '../common/TempRangeBar';
import { MonthPicker } from './packing/MonthPicker';
import { PackingChecklist } from './packing/PackingChecklist';

interface PackingTabProps {
  country: Country;
  packing: UsePackingReturn;
}

/** 날씨·패킹 탭: 지역·월 선택 → 기후 분석 → 준비물 체크리스트 */
export function PackingTab({ country, packing }: PackingTabProps) {
  const {
    selectedRegionId,
    setSelectedRegionId,
    selectedMonth,
    setSelectedMonth,
    checkedItems,
    handleCheck,
    toggleAllPacked,
    currentClimatePeriod,
    activePeriodMonths,
    packedCount,
    totalCount,
    allPacked,
  } = packing;

  const selectedRegionName = country.regions.find((r) => r.id === selectedRegionId)?.name.split(' ')[0];
  const progress = totalCount ? (packedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-4 animate-fade-in">
      <SectionHeader title="도시별 날씨 & 패킹 리스트" icon="cloud-sun" />

      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-[340px_1fr] lg:gap-6 lg:items-start">
        {/* 좌측: 지역·월 선택 (데스크탑에서 sticky) */}
        <div className="space-y-4 lg:sticky lg:top-36">
          <div className="bg-white rounded-2xl p-4 shadow-soft border border-slate-100 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-xs font-extrabold text-slate-500">상세 기후 분석 지역</span>
              <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                기후 편차 보완 완료
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {country.regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegionId(reg.id)}
                  className={`focus-ring py-3 px-3 text-xs font-bold rounded-xl border transition-all text-center ${
                    selectedRegionId === reg.id
                      ? 'bg-slate-800 border-slate-800 text-white shadow-md font-extrabold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <i className="ph ph-map-pin text-sm mr-1.5 inline-block align-middle" />
                  <span className="align-middle">{reg.name}</span>
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 leading-snug">
              * {country.name}은(는) 땅이 넓거나 산악·해안 기후 편차가 크기 때문에, 도시별로 맞춤형 기상을 선택해야 정확한
              짐을 쌀 수 있습니다.
            </p>
          </div>

          {/* 데스크탑 전용 월 선택 카드 */}
          <div className="hidden lg:block bg-white rounded-2xl p-4 shadow-soft border border-slate-100">
            <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">출발할 달(Month)을 고르세요</p>
            <MonthPicker
              selectedMonth={selectedMonth}
              onSelect={setSelectedMonth}
              activePeriodMonths={activePeriodMonths}
              columns={4}
            />
          </div>
        </div>

        {/* 우측: 기후 분석 + 체크리스트 */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
          {/* 모바일 전용 월 선택 */}
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 lg:hidden">
            <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">출발할 달(Month)을 고르세요</p>
            <MonthPicker
              selectedMonth={selectedMonth}
              onSelect={setSelectedMonth}
              activePeriodMonths={activePeriodMonths}
              columns={6}
            />
          </div>

          <div className="p-5 lg:p-7">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight">{currentClimatePeriod.temp}</h4>
                <p className="text-xs text-slate-400 font-bold mt-0.5">선택 지역의 평균 최고·최저 기온</p>
              </div>
              <div className="px-3 py-1 bg-brand-50 border border-brand-100 text-brand-600 rounded-xl text-xs font-extrabold">
                {selectedMonth}월 기상 정보
              </div>
            </div>

            <TempRangeBar tempStr={currentClimatePeriod.temp} />

            <div className="my-4 flex items-center gap-2 px-3.5 py-3 bg-amber-50/60 border border-amber-100 rounded-xl text-xs font-bold text-amber-800 leading-snug">
              <i className="ph ph-info text-base text-amber-600 shrink-0" />
              <span>
                이 시기 {selectedRegionName}은(는)
                <br />
                우리나라의{' '}
                <span className="text-brand-600 font-black underline">{currentClimatePeriod.koreanEquivalent}</span>과 아주
                흡사해요!
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 mb-5 text-xs text-slate-600 leading-relaxed font-medium">
              <div className="font-extrabold text-slate-700 flex items-center gap-1.5 mb-1.5">
                <i className="ph-fill ph-lightbulb text-amber-500" /> 현지 옷차림 스타일링 솔루션
              </div>
              {currentClimatePeriod.tip}
            </div>

            <div className="flex items-center justify-between mb-3">
              <h5 className="font-extrabold text-slate-700 text-xs flex items-center gap-2">
                <i className="ph ph-check-square-offset text-base text-brand-500" /> {selectedMonth}월 맞춤형 준비물 체크리스트
              </h5>
              <button onClick={toggleAllPacked} className="focus-ring text-[11px] font-bold text-brand-600 hover:text-brand-700">
                {allPacked ? '전체 해제' : '전체 선택'}
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-slate-400 shrink-0">
                {packedCount}/{totalCount}
              </span>
            </div>

            <PackingChecklist items={currentClimatePeriod.items} checkedItems={checkedItems} onToggle={handleCheck} />
          </div>
        </div>
      </div>
    </div>
  );
}
