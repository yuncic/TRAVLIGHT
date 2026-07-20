import { parseTempRange, getTempFeel, FEEL_LABELS, WIDE_DIURNAL_THRESHOLD } from '../../lib/temperature';

interface TempRangeBarProps {
  tempStr: string;
}

/** 단계별 색상 (추움 → 더움) */
const SEGMENT_COLORS = [
  'bg-sky-400',
  'bg-teal-300',
  'bg-emerald-300',
  'bg-amber-300',
  'bg-rose-400',
];

/**
 * 정확한 눈금 대신 '대략적 체감'을 보여주는 온도 느낌 바.
 * 5단계 중 현재 기간이 속한 구간만 진하게 강조해 빈 구간이 남지 않게 한다.
 */
export function TempRangeBar({ tempStr }: TempRangeBarProps) {
  const range = parseTempRange(tempStr);
  if (!range) return null;

  const feel = getTempFeel(range.min, range.max);
  const isWide = range.diff >= WIDE_DIURNAL_THRESHOLD;

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-bold text-slate-400">체감 온도</span>
        <span className="text-xs font-extrabold text-slate-700">
          {feel.label} · {range.min}~{range.max}°C
        </span>
      </div>

      {/* 5단계 느낌 바: 활성 구간만 강조 */}
      <div className="flex gap-1">
        {FEEL_LABELS.map((label, i) => {
          const active = i === feel.level;
          return (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`h-2 w-full rounded-full transition-all ${
                  active ? `${SEGMENT_COLORS[i]} shadow-sm` : 'bg-slate-100'
                }`}
              />
              <span className={`text-[9px] font-bold ${active ? 'text-slate-600' : 'text-slate-300'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* 일교차가 크면: 겉옷 안내를 핵심 메시지로 강조 */}
      {isWide && (
        <div className="mt-3 flex items-center gap-2.5 px-3.5 py-2.5 bg-orange-50 border border-orange-200 rounded-xl">
          <i className="ph-fill ph-coat-hanger text-orange-500 text-lg shrink-0" />
          <p className="text-xs font-extrabold text-orange-800 leading-snug">
            일교차 {range.diff}°C · 겹쳐 입을 겉옷을 꼭 챙기세요
          </p>
        </div>
      )}
    </div>
  );
}
