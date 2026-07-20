/**
 * 메인 탭 정의.
 * 탭을 추가/변경하려면 이 배열만 수정하면 되고,
 * 슬라이딩 인디케이터 너비는 개수에 따라 자동 계산된다(TabBar 참고).
 */

export type TabId = 'visa' | 'prohibited' | 'airline' | 'packing' | 'transport' | 'tips';

export interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

export const TABS: Tab[] = [
  { id: 'visa', label: '비자·서류', icon: 'airplane-tilt' },
  { id: 'prohibited', label: '반입 규정', icon: 'prohibit' },
  { id: 'airline', label: '항공사 규정', icon: 'airplane-in-flight' },
  { id: 'packing', label: '날씨·패킹', icon: 'suitcase' },
  { id: 'transport', label: '교통·운전', icon: 'car' },
  { id: 'tips', label: '현지 꿀팁', icon: 'lightbulb' },
];
