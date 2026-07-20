/**
 * Google Analytics 4 (gtag.js) 커스텀 이벤트 계측.
 *
 * Measurement ID는 코드에 직접 넣지 않고 Vercel 환경변수(VITE_GA_MEASUREMENT_ID)에서 읽는다.
 * ID가 없으면(로컬 등) 아무 것도 로드/전송하지 않아 안전하다.
 *
 * - 방문자/세션: GA4 config가 최초 page_view를 자동 전송 → 도달 인원 집계
 * - cta_enter: 랜딩 → 서비스 진입(전환). source로 어느 CTA인지 구분
 * - tab_click: 진입 후 어떤 정보 탭을 눌렀는지. tab·country 속성 포함
 */

const GA_ID = (import.meta.env as Record<string, string | undefined>).VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** GA4 스크립트를 한 번만 로드·초기화한다. ID가 없으면 no-op. */
export function initAnalytics(): void {
  if (initialized || !GA_ID || typeof window === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

type EventParams = Record<string, string | number | boolean>;

function sendEvent(name: string, params: EventParams): void {
  if (!GA_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

/** 'TravLight 이용하기' 등으로 서비스에 진입 (전환 이벤트) */
export const trackEnter = (source: 'hero' | 'final_cta' | 'nav'): void => {
  sendEvent('cta_enter', { source });
};

/** 정보 탭 클릭 */
export const trackTabClick = (tab: string, country: string): void => {
  sendEvent('tab_click', { tab, country });
};
