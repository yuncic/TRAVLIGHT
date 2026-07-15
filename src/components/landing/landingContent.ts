/**
 * 랜딩 페이지 카피·데이터.
 * 문구/기능 항목을 마크업과 분리해, 수정 시 이 파일만 손보면 되도록 한다.
 */

export interface PainPoint {
  icon: string;
  title: string;
  desc: string;
}

export interface FeatureItem {
  icon: string;
  tag: string;
  title: string;
  desc: string;
}

export interface TrustSource {
  icon: string;
  name: string;
  desc: string;
}

/** 사용자가 겪는 불편 (인터뷰 인사이트 기반) */
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: 'browsers',
    title: '탭을 몇 개씩 열어놓고',
    desc: '구글, 블로그, 카페, 대사관 사이트를 오가며 조각조각 정보를 짜맞춰야 했어요.',
  },
  {
    icon: 'question',
    title: '블로그마다 다른 말',
    desc: '같은 나라인데 글마다 내용이 달라서, 어느 게 맞는 정보인지 확신이 안 섰어요.',
  },
  {
    icon: 'clock-countdown',
    title: '"이거 최신 맞나?"',
    desc: '비자·반입 규정은 자주 바뀌는데, 언제 적힌 글인지 몰라 늘 불안했어요.',
  },
];

/** 서비스가 제공하는 정보 = 현재 5개 탭 */
export const FEATURES: FeatureItem[] = [
  {
    icon: 'airplane-tilt',
    tag: '입국·비자',
    title: '입국 조건을 국가별로',
    desc: '최대 체류 가능일, 필요한 입국 서류, 여권 유효기간 규정까지 한눈에 확인하세요.',
  },
  {
    icon: 'prohibit',
    tag: '세관 반입 규정',
    title: '나라별 반입 금지·신고 품목',
    desc: '일본 육가공품, 태국 전자담배, 호주 검역처럼 나라마다 다른 세관 규정을 정리했어요.',
  },
  {
    icon: 'airplane-in-flight',
    tag: '항공사 규정',
    title: '기내·위탁 수하물 규정',
    desc: '보조배터리·액체 규정을 국내외 항공사별로. 국가 규정과 헷갈리지 않게 분리했어요.',
  },
  {
    icon: 'cloud-sun',
    tag: '날씨·패킹',
    title: '한국 날씨에 빗댄 옷차림 가이드',
    desc: '도시·월별 기온을 "우리나라 초겨울처럼"으로 알려주고, 준비물 체크리스트까지 제공해요.',
  },
  {
    icon: 'lightbulb',
    tag: '현지 꿀팁',
    title: '실전 현지 적응 팁',
    desc: '팁 문화, 대중교통 이용법, 현지 매너 등 미리 알면 좋은 정보를 카테고리별로 담았어요.',
  },
];

/** 신뢰성의 근거가 되는 공식 출처 */
export const TRUST_SOURCES: TrustSource[] = [
  { icon: 'shield-check', name: '외교부 해외안전여행', desc: '입국·비자·여권 규정의 정부 공식 안내' },
  { icon: 'buildings', name: '각국 세관·검역청', desc: '반입 금지·신고 품목의 원문 고시' },
  { icon: 'airplane', name: '국내외 항공사 공식 규정', desc: '수하물·위험물 규정의 항공사 원문' },
];
