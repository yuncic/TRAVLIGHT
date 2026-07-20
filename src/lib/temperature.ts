/**
 * 기온 문자열 파싱 및 시각화 유틸.
 * 순수 함수만 모아 UI와 분리한다(테스트·재사용 용이).
 */

export interface TempRange {
  min: number;
  max: number;
  /** 일교차 */
  diff: number;
}

/** "10°C ~ 20°C" 형태의 문자열을 { min, max, diff }로 변환 */
export const parseTempRange = (str: string): TempRange | null => {
  const m = str.match(/(-?\d+)°C\s*~\s*(-?\d+)°C/);
  if (!m) return null;
  const min = parseInt(m[1], 10);
  const max = parseInt(m[2], 10);
  return { min, max, diff: max - min };
};

/** -10°C~40°C 범위를 0~100% 위치로 정규화 (온도 바 렌더링용) */
export const tempToPercent = (t: number): number => {
  const clamped = Math.max(-10, Math.min(40, t));
  return ((clamped + 10) / 50) * 100;
};

/** 겉옷이 필요할 만큼 일교차가 큰지 판단하는 기준값 */
export const WIDE_DIURNAL_THRESHOLD = 8;

/** 온도 느낌 5단계 (대략적 체감 표현용) */
export interface TempFeel {
  /** 0(매우 추움) ~ 4(무더움) */
  level: 0 | 1 | 2 | 3 | 4;
  label: string;
}

const FEEL_SCALE: { max: number; label: string; level: TempFeel['level'] }[] = [
  { max: 4, label: '매우 추움', level: 0 },
  { max: 12, label: '쌀쌀함', level: 1 },
  { max: 21, label: '선선·쾌적', level: 2 },
  { max: 28, label: '따뜻함', level: 3 },
  { max: Infinity, label: '무더움', level: 4 },
];

/** 최저·최고 평균 기온을 5단계 체감 표현으로 변환 */
export const getTempFeel = (min: number, max: number): TempFeel => {
  const avg = (min + max) / 2;
  const found = FEEL_SCALE.find((f) => avg <= f.max) ?? FEEL_SCALE[FEEL_SCALE.length - 1];
  return { level: found.level, label: found.label };
};

/** 5단계 체감 라벨 (느낌 바 렌더링용, 낮음→높음) */
export const FEEL_LABELS = ['추움', '쌀쌀', '선선', '따뜻', '더움'] as const;
