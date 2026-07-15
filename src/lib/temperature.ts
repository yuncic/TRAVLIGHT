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
