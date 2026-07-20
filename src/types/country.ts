/**
 * 도메인 타입 정의.
 * 앱 전반에서 사용하는 국가/비자/세관/항공/기후 데이터의 형태를 한곳에서 관리한다.
 */

export type ContinentId = 'asia' | 'europe' | 'americas' | 'oceania';

/** 국가 선택 모달의 대륙 필터에는 'all'(전체)이 추가로 존재한다. */
export type ContinentFilterId = 'all' | ContinentId;

export interface Continent {
  id: ContinentFilterId;
  name: string;
}

/** 입국 자격 및 비자 요건 + 공신력 있는 출처 링크 */
export interface Visa {
  status: string;
  duration: string;
  requirements: string;
  passport: string;
  /** 외교부 해외안전여행 국가 안전정보 페이지 */
  mofaLink: string;
  /** 목적지국 공식 입국·비자 포털 */
  officialLink: string;
  linkText: string;
}

export interface OfficialLink {
  name: string;
  url: string;
}

/** 국가별 세관·검역 기준 반입 규정 */
export interface Customs {
  warning: string;
  /** 반입 금지 품목 */
  banned: string[];
  /** 신고·허가 필요 품목 */
  restricted: string[];
  /** 공식 세관·검역 출처 링크 */
  links: OfficialLink[];
}

/** 항공사 공식 규정 링크 (국내/외항사 공용) */
export type Airline = OfficialLink;

export interface Region {
  id: string;
  name: string;
}

export interface ClimatePeriod {
  months: number[];
  temp: string;
  koreanEquivalent: string;
  tip: string;
  items: string[];
}

export interface RegionClimate {
  periods: ClimatePeriod[];
}

/** regionId → 해당 지역의 기후 정보 */
export type Climate = Record<string, RegionClimate>;

export interface LocalTip {
  icon: string;
  title: string;
  desc: string;
}

export interface Country {
  id: string;
  name: string;
  englishName: string;
  continent: ContinentId;
  flag: string;
  image: string;
  visa: Visa;
  customs: Customs;
  /** 해당 국가 취항 대표 외항사 */
  foreignAirlines: Airline[];
  regions: Region[];
  climate: Climate;
  localTips: LocalTip[];
  transport: Transport;
}


/** 국제운전면허(IDP) 사용 가능 여부 배지용 상태값 */
export type DrivingStatus = '운전 가능' | '조건부 가능' | '별도 절차 필요';

/** 현지 교통수단 가성비 추천도 배지용 상태값 */
export type TransportRating = '강력추천' | '추천' | '상황별' | '주의';

/** 한국 운전면허·국제운전면허(IDP)로 현지 운전 가능 여부 + 근거 */
export interface DrivingInfo {
  /** 한눈에 보는 IDP 사용 가능 여부 */
  status: DrivingStatus;
  /** 인정 근거 협약/협정 (예: 제네바협약 1949) */
  convention: string;
  /** 필요 서류 및 조건 */
  requirements: string;
  /** 반드시 알아야 할 주의사항 */
  note: string;
}

/** 현지 이동수단별 가성비·추천 정보 */
export interface TransportMode {
  /** Phosphor 아이콘명 (ph-*) */
  icon: string;
  name: string;
  desc: string;
  rating: TransportRating;
}

/** 교통·운전 탭 데이터: 운전 규정 + 현지 교통 가성비 + 공식 출처 */
export interface Transport {
  driving: DrivingInfo;
  /** 현지 교통수단 가성비 카드 */
  modes: TransportMode[];
  /** 결제·앱·교통카드 한 줄 요약 */
  summary: string;
  /** 공신력 있는 공식 출처 링크 */
  links: OfficialLink[];
}

/** 전 항공사 공통 위험물·수하물 규정 (ICAO·IATA 기준) */
export interface CommonAirRule {
  icon: string;
  title: string;
  cabin: string;
  checked: string;
}
