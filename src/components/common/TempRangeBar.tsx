import { parseTempRange, tempToPercent, WIDE_DIURNAL_THRESHOLD } from '../../lib/temperature';

interface TempRangeBarProps {
  tempStr: string;
}

/** 일교차를 한눈에 보여주는 시각적 온도 범위 바 */
export function TempRangeBar({ tempStr }: TempRangeBarProps) {
  const range = parseTempRange(tempStr);
  if (!range) return null;

  const minPct = tempToPercent(range.min);
  const maxPct = tempToPercent(range.max);
  const isWide = range.diff >= WIDE_DIURNAL_THRESHOLD;

  return (
    <div className="mt-3">
      <div className="relative h-2 rounded-full bg-gradient-to-r from-sky-400 via-amber-300 to-rose-400 overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-white/50" style={{ width: `${minPct}%` }} />
        <div className="absolute inset-y-0 right-0 bg-white/50" style={{ width: `${100 - maxPct}%` }} />
      </div>
      <div className="relative h-4 mt-0.5">
        <span className="absolute -translate-x-1/2 text-[10px] font-bold text-slate-500" style={{ left: `${minPct}%` }}>
          {range.min}°
        </span>
        <span className="absolute -translate-x-1/2 text-[10px] font-bold text-slate-500" style={{ left: `${maxPct}%` }}>
          {range.max}°
        </span>
      </div>
      {isWide && (
        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 border border-orange-200 text-orange-700 rounded-lg text-[11px] font-bold">
          <i className="ph ph-gauge text-sm" />
          일교차 {range.diff}°C · 겹쳐 입을 겉옷을 꼭 챙기세요
        </div>
      )}
    </div>
  );
}
