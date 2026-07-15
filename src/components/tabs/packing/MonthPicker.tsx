interface MonthPickerProps {
  selectedMonth: number;
  onSelect: (month: number) => void;
  /** 현재 기후 기간에 포함되는 월들(강조 표시용) */
  activePeriodMonths: number[];
  /** 데스크탑 4열 / 모바일 6열 */
  columns: 4 | 6;
}

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

/** 출발 월 선택 그리드. 데스크탑/모바일에서 열 수만 다르게 재사용한다. */
export function MonthPicker({ selectedMonth, onSelect, activePeriodMonths, columns }: MonthPickerProps) {
  const gridClass = columns === 4 ? 'grid-cols-4' : 'grid-cols-6';

  return (
    <div className={`grid ${gridClass} gap-1.5`}>
      {MONTHS.map((m) => {
        const inActivePeriod = activePeriodMonths.includes(m);
        return (
          <button
            key={m}
            onClick={() => onSelect(m)}
            className={`focus-ring py-2 text-xs font-bold rounded-xl transition-all relative ${
              selectedMonth === m
                ? 'bg-brand-500 text-white shadow-sm scale-105 font-extrabold'
                : inActivePeriod
                  ? 'bg-brand-50 text-brand-600 border border-brand-100'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {m}월
          </button>
        );
      })}
    </div>
  );
}
