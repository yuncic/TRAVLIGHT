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
}

/** 전 항공사 공통 위험물·수하물 규정 (ICAO·IATA 기준) */
export interface CommonAirRule {
  icon: string;
  title: string;
  cabin: string;
  checked: string;
}
