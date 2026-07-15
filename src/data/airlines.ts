import type { Airline, CommonAirRule } from '../types/country';

/** 국내 주요 항공사 — 모든 국가의 항공사 규정 탭에 공통 노출 */
export const DOMESTIC_AIRLINES: Airline[] = [
  {
    "name": "대한항공",
    "url": "https://www.koreanair.com/contents/plan-your-travel/baggage/restricted-item"
  },
  {
    "name": "아시아나항공",
    "url": "https://m.flyasiana.com/C/KR/KO/contents/baggage"
  },
  {
    "name": "제주항공",
    "url": "https://www.jejuair.net/ko/linkService/boardingProcessGuide/transportLimitation.do"
  },
  {
    "name": "티웨이항공",
    "url": "https://www.twayair.com/app/serviceInfo/contents/1150"
  },
  {
    "name": "진에어",
    "url": "https://www.jinair.com/ready/battery?snsLang=ko_KR&ctrCd=KOR"
  }
];

/** 전 항공사 공통 위험물·수하물 기본 규정 (ICAO·IATA 기준) */
export const COMMON_AIR_RULES: CommonAirRule[] = [
  {
    "icon": "drop",
    "title": "액체·젤·에어로졸 (LAG)",
    "cabin": "개별 용기 100ml 이하만 가능 · 1L 이하 투명 지퍼백 1개에 모아 담기",
    "checked": "용량 제한 없음 (위탁 권장)"
  },
  {
    "icon": "battery-charging",
    "title": "보조배터리·리튬배터리·전자담배",
    "cabin": "반드시 기내 휴대 · 100Wh 이하 자유, 100~160Wh는 항공사 승인 후 최대 2개",
    "checked": "위탁 수하물 반입 전면 금지"
  },
  {
    "icon": "flame",
    "title": "라이터",
    "cabin": "1인당 1개만 몸에 휴대",
    "checked": "위탁·여분 반입 금지"
  },
  {
    "icon": "knife",
    "title": "도검·가위·골프채 등 위해물품",
    "cabin": "기내 반입 불가",
    "checked": "위탁 수하물로만 가능"
  }
];
