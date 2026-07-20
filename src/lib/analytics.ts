import { track } from '@vercel/analytics/react';

/**
 * 가설 실험용 커스텀 이벤트 계측 헬퍼.
 * 이벤트 이름·속성을 한곳에서 관리해 분석 시 스키마가 흔들리지 않게 한다.
 *
 * - 방문자 수/랜딩 조회: Vercel Analytics 자동 페이지뷰(대시보드)에서 확인
 * - cta_enter: 랜딩 → 실제 서비스 진입(전환). source로 어느 버튼인지 구분
 * - tab_click: 진입 후 어떤 정보 탭을 눌렀는지. country로 어느 나라 맥락인지 구분
 */

/** 'TravLight 이용하기' 등으로 서비스에 진입 (전환 이벤트) */
export const trackEnter = (source: 'hero' | 'final_cta' | 'nav') => {
  track('cta_enter', { source });
};

/** 정보 탭 클릭 */
export const trackTabClick = (tab: string, country: string) => {
  track('tab_click', { tab, country });
};
