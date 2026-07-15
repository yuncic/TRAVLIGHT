/**
 * 현지 꿀팁 아이콘 → 카테고리 매핑 및 카테고리별 스타일 메타.
 * 순수 프레젠테이션 로직으로, 데이터 변경 없이 표현만 담당한다.
 */

export type TipCategory = 'cost' | 'transport' | 'safety' | 'culture';

export interface CategoryMeta {
  label: string;
  text: string;
  bg: string;
  border: string;
  bar: string;
}

const TIP_CATEGORY_BY_ICON: Record<string, TipCategory> = {
  money: 'cost',
  wallet: 'cost',
  coins: 'cost',
  ticket: 'cost',
  'credit-card': 'cost',
  taxi: 'transport',
  car: 'transport',
  bus: 'transport',
  motorcycle: 'transport',
  'car-profile': 'transport',
  train: 'transport',
  warning: 'safety',
  'police-car': 'safety',
  bag: 'safety',
  'exclamation-mark': 'safety',
  'warning-circle': 'safety',
};

export const CATEGORY_META: Record<TipCategory, CategoryMeta> = {
  cost: { label: '비용', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-400' },
  transport: { label: '교통', text: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-200', bar: 'bg-sky-400' },
  safety: { label: '안전·주의', text: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200', bar: 'bg-rose-400' },
  culture: { label: '문화·생활', text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'bg-emerald-400' },
};

/** 아이콘명으로 카테고리를 결정. 미매핑 시 '문화·생활'로 폴백 */
export const getTipCategory = (icon: string): TipCategory => TIP_CATEGORY_BY_ICON[icon] ?? 'culture';
