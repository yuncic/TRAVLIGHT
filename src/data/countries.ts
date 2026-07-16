import type { Country } from "../types/country";

/**
 * 국가별 여행 정보(정적 데이터).
 * 상태가 아니라 고정값이므로 상수 모듈로 분리한다.
 * 추후 API/DB 연동 시 이 모듈만 교체하면 된다.
 */
export const COUNTRIES: Country[] = [
  {
    id: "JP",
    name: "일본",
    englishName: "Japan",
    continent: "asia",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "무비자",
      duration: "최대 90일 체류 가능",
      requirements: "Visit Japan Web 등록 권장 (입국 심사 및 세관 신고 통합 모바일 서비스)",
      passport: "체류 예정일 이상 유효한 전자 여권 필요",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/183/detail",
      officialLink: "https://www.vjw.digital.go.jp/",
      linkText: "Visit Japan Web 공식 등록 사이트",
    },
    customs: {
      warning:
        "육류·육가공품(햄·소시지·육포·만두 등)은 동물검역 대상으로, 소량이라도 반입 시 최대 벌금·징역 및 압수 대상입니다. 공항에서 구입한 것도 예외가 아닙니다.",
      banned: [
        "소·돼지·닭 등 육류 및 햄·소시지·육포 등 육가공품",
        "마약류 및 향정신성 물질",
        "총기·도검류 및 모조 무기",
        "위조지폐·위조 브랜드(짝퉁) 물품",
        "아동 포르노 등 공중도덕 저해 물품",
      ],
      restricted: [
        "과일·채소·식물류(식물검역 신고 필요)",
        "육류·동식물 제품(동물·식물검역소 사전 검사)",
        "현금 100만 엔 상당액 초과 시 신고",
      ],
      links: [
        {
          name: "일본 세관 – 반입 금지·제한 물품",
          url: "https://www.customs.go.jp/english/summary/prohibit.htm",
        },
        {
          name: "일본 세관 – 축산물·동식물 검역 안내",
          url: "https://www.customs.go.jp/english/c-answer_e/keitaibetsuso/7107_e.htm",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "일본항공 (JAL)",
        url: "https://www.jal.co.jp/jp/en/inter/baggage/limit/",
      },
      {
        name: "전일본공수 (ANA)",
        url: "https://www.ana.co.jp/en/us/travel-information/baggage-information/restricted-prohibited/",
      },
    ],
    regions: [
      {
        id: "tokyo",
        name: "도쿄 (중부 온화)",
      },
      {
        id: "sapporo",
        name: "삿포로 (북부 한랭)",
      },
    ],
    climate: {
      tokyo: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "10°C ~ 20°C",
            koreanEquivalent: "우리나라의 따뜻한 봄 날씨",
            tip: "벚꽃 시즌으로 날씨가 매우 쾌적하나, 일교차가 큽니다. 가벼운 아우터를 레이어드하여 입으세요.",
            items: ["얇은 자켓 또는 가디건", "편한 걷기용 스니커즈", "휴대용 작은 우산"],
          },
          {
            months: [6, 7, 8],
            temp: "25°C ~ 35°C",
            koreanEquivalent: "우리나라의 무덥고 습한 한여름 날씨",
            tip: "도쿄는 한국보다 습도가 매우 높고 6~7월 중순까지 장마철입니다. 통풍이 잘되는 옷과 자외선 차단이 필수입니다.",
            items: ["통풍이 잘되는 반팔/반바지", "양우산", "선크림 & 선글라스", "휴대용 선풍기"],
          },
          {
            months: [9, 10, 11],
            temp: "15°C ~ 25°C",
            koreanEquivalent: "우리나라의 화창하고 선선한 가을 날씨",
            tip: "태풍이 가끔 찾아오는 9월을 제외하면 가을 단풍 구경에 최적화된 야외 활동 전성기입니다.",
            items: ["긴팔 셔츠", "가벼운 외투(바람막이 등)", "편안한 도보용 운동화"],
          },
          {
            months: [12, 1, 2],
            temp: "2°C ~ 12°C",
            koreanEquivalent: "우리나라의 늦가을에서 초겨울 날씨",
            tip: "한국(서울 기준)보다는 기온이 높으나 바닷바람과 난방 특성상 은근히 쌀쌀합니다. 레이어드 이너웨어가 유용합니다.",
            items: ["따뜻한 코트 또는 다운패딩", "히트텍 등 보온 이너", "머플러 및 장갑"],
          },
        ],
      },
      sapporo: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "-2°C ~ 10°C",
            koreanEquivalent: "우리나라의 추운 늦겨울에서 꽃샘추위 날씨",
            tip: "봄이 늦게 찾아오며 4월까지도 눈이 내릴 수 있습니다. 노면 빙판길에 주의하고 두터운 아우터가 필수입니다.",
            items: ["도톰한 코트 및 방풍 자켓", "미끄럼 방지 슈즈", "보온 양말"],
          },
          {
            months: [6, 7, 8],
            temp: "16°C ~ 25°C",
            koreanEquivalent: "우리나라의 선선하고 쾌적한 늦봄~초여름 날씨",
            tip: "일본 내에서 유일하게 장마(바이우)가 없어 한여름에도 매우 선선하고 피서 여행지로 제격입니다. 저녁엔 쌀쌀할 수 있습니다.",
            items: ["반팔 및 가벼운 긴팔 셔츠", "여름용 얇은 가디건", "자외선 차단 선글라스"],
          },
          {
            months: [9, 10, 11],
            temp: "5°C ~ 18°C",
            koreanEquivalent: "우리나라의 쌀쌀한 초겨울 날씨",
            tip: "단풍이 가장 일찍 물드는 지역이며 11월부터는 본격적으로 첫눈과 겨울 시즌이 시작되어 기온이 급감합니다.",
            items: ["패딩 또는 두꺼운 코트", "니트류 가을옷", "목도리"],
          },
          {
            months: [12, 1, 2],
            temp: "-8°C ~ -1°C",
            koreanEquivalent: "우리나라의 매서운 혹한기 겨울 날씨",
            tip: "세계적인 눈의 도시로 폭설이 일상입니다. 길거리가 모두 얼어붙으므로 완벽한 방한 대비와 부츠형 슈즈가 필수적입니다.",
            items: ["롱패딩 또는 헤비 다운", "방수 방한화(아이젠 추천)", "방한 장갑 및 비니 귀도리"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "coins",
        title: "팁 문화 없음",
        desc: "일본은 팁 문화가 전혀 없습니다. 식당이나 택시에서 거스름돈을 확실히 챙겨 받으세요.",
      },
      {
        icon: "train",
        title: "대중교통 패스",
        desc: "교통비가 매우 비싸므로, 여행 일정과 동선에 맞춰 메트로 패스나 교통카드(스이카, 파스모 등)를 미리 구매하는 것을 추천합니다.",
      },
      {
        icon: "credit-card",
        title: "엔화 현금 필수",
        desc: "카드 결제 매장이 크게 늘었지만 노포 식당, 로컬 상점, 신사 등에서는 여전히 현금만 받는 경우가 많으므로 현금을 소지해야 합니다.",
      },
      {
        icon: "warning-circle",
        title: "대중교통 에티켓",
        desc: "지하철이나 버스 안에서는 휴대폰을 무음 모드로 설정하고, 통화를 자제하는 것이 강력한 현지 매너입니다.",
      },
    ],
  },
  {
    id: "US",
    name: "미국",
    englishName: "United States",
    continent: "americas",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "전자여행허가 (ESTA)",
      duration: "최대 90일 체류 가능",
      requirements: "최소 출발 72시간 전까지 ESTA 승인 완료 필수 (신청 수수료 $21 발생)",
      passport: "미국 입국일 기준 유효기간이 6개월 이상 남은 전자여권 필수",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/list",
      officialLink: "https://esta.cbp.dhs.gov/",
      linkText: "미국 국토안보부 ESTA 공식 신청 사이트",
    },
    customs: {
      warning:
        "육류 성분이 미량이라도 포함된 가공식품(예: 소고기 추출물이 든 라면 스프)까지 반입 금지·압수 대상입니다. 생과일·씨앗·육류는 반드시 세관 신고서에 자진 신고해야 하며, 미신고 시 최소 $300 과태료가 부과됩니다.",
      banned: [
        "육류·가금류 및 관련 가공식품(구제역·아프리카돼지열병 방역)",
        "생과일·채소·씨앗·식물(대부분 국가발 반입 제한)",
        "마약류 및 관련 기구",
        "위조 상표(짝퉁) 물품",
        "쿠바산 시가 등 제재 대상 물품",
      ],
      restricted: [
        "모든 육류·농축산물·식품은 세관 신고서에 신고 필수",
        "현금 $10,000 초과 시 신고(FinCEN 105)",
        "의약품은 개인 사용량 및 처방전 소지 권장",
      ],
      links: [
        {
          name: "미국 세관국경보호청(CBP) – 반입 금지·제한 물품",
          url: "https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items",
        },
        {
          name: "미국 농무부(USDA APHIS) – 농축산물 반입",
          url: "https://www.aphis.usda.gov/traveling-with-ag-products",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "유나이티드항공 (United)",
        url: "https://www.united.com/en/us/fly/baggage/dangerous-items.html",
      },
      {
        name: "델타항공 (Delta)",
        url: "https://www.delta.com/us/en/baggage/prohibited-or-restricted-items/overview",
      },
    ],
    regions: [
      {
        id: "newyork",
        name: "뉴욕 (동부 사계절)",
      },
      {
        id: "losangeles",
        name: "로스앤젤레스 (서부 연중온화)",
      },
    ],
    climate: {
      newyork: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "5°C ~ 18°C",
            koreanEquivalent: "우리나라의 선선하고 변덕스러운 봄 날씨",
            tip: "바람이 불면 다소 쌀쌀할 수 있으며 봄철에도 가벼운 야상 점퍼나 트렌치코트, 니트가 필요합니다.",
            items: ["트렌치 코트", "봄 자켓", "선글라스"],
          },
          {
            months: [6, 7, 8],
            temp: "18°C ~ 30°C",
            koreanEquivalent: "우리나라의 습하고 뜨거운 한여름 날씨",
            tip: "도시 열섬 현상과 습도로 매우 무덥습니다. 반면 대형 백화점, 뮤지엄, 브로드웨이 극장 내부는 에어컨이 강력하니 걸칠 셔츠가 꼭 필요합니다.",
            items: ["얇은 반팔", "실내용 가벼운 셔츠/바람막이", "선크림 & 선글라스"],
          },
          {
            months: [9, 10, 11],
            temp: "8°C ~ 22°C",
            koreanEquivalent: "우리나라의 청명하고 쌀쌀한 가을 날씨",
            tip: "센트럴파크가 가장 아름다운 시기이나 11월에 접어들면 영하권에 육박해 가벼운 패딩 등 초겨울 복장이 요구됩니다.",
            items: ["자켓 또는 얇은 패딩 코트", "머플러", "니트류 의류"],
          },
          {
            months: [12, 1, 2],
            temp: "-4°C ~ 5°C",
            koreanEquivalent: "우리나라의 한파가 동반되는 겨울 날씨",
            tip: "강한 칼바람과 폭설이 자주 내립니다. 빌딩 숲 사이의 칼바람을 이겨내기 위해 완전 무장 방한 패킹을 준비해야 합니다.",
            items: ["두꺼운 다운 롱패딩", "목도리, 털모자, 가죽 장갑", "보온 내의(히트텍)"],
          },
        ],
      },
      losangeles: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "12°C ~ 22°C",
            koreanEquivalent: "우리나라의 화창하고 기분 좋은 늦봄 날씨",
            tip: "낮에는 매우 쾌적하고 맑아 여행하기 최고이지만 아침저녁으로 해안가 바람이 불어 기온이 뚝 떨어지니 겉옷을 꼭 챙기세요.",
            items: ["얇은 아우터(가디건, 데님자켓)", "청바지", "선글라스"],
          },
          {
            months: [6, 7, 8],
            temp: "16°C ~ 29°C",
            koreanEquivalent: "우리나라의 습도 낮고 쾌적하게 쨍쨍한 여름 날씨",
            tip: "습도가 낮아 그늘에 가면 시원한 축복받은 여름입니다. 햇볕이 대단히 강렬하므로 선글라스와 강력한 자외선 차단제가 필수입니다.",
            items: ["반팔 및 린넨 의류", "강력 차단 선크림", "모자 & 선글라스"],
          },
          {
            months: [9, 10, 11],
            temp: "13°C ~ 25°C",
            koreanEquivalent: "우리나라의 따뜻하고 선선한 초가을 날씨",
            tip: "낮에는 여전히 온화하지만 일교차가 10도 이상 벌어집니다. 후드티나 블루종 같은 겹쳐입기 좋은 자켓이 빛을 발합니다.",
            items: ["긴팔 셔츠 및 후드티", "바람막이 자켓", "보습 크림"],
          },
          {
            months: [12, 1, 2],
            temp: "9°C ~ 19°C",
            koreanEquivalent: "우리나라의 따스하고 쾌적한 늦봄~가을 초입 날씨",
            tip: "LA의 겨울은 얼어붙지 않는 온화한 우기입니다. 종종 소나기가 내리며 가벼운 니트나 자켓 하나면 겨울철 여행이 충분합니다.",
            items: ["자켓 또는 트렌치", "가벼운 가디건", "휴대용 작은 우산"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "money",
        title: "팁 문화 의무",
        desc: "미국은 팁이 필수입니다. 일반 식당 테이블 서비스 이용 시 전체 금액의 15%~20%, 호텔 벨보이나 발렛은 $2~$5 정도를 제공하는 것이 매너입니다.",
      },
      {
        icon: "car",
        title: "렌터카 중심 교통",
        desc: "뉴욕 같은 대도시를 제외하면 대중교통이 발달하지 않았으므로 렌터카나 승차공유 앱(Uber, Lyft) 이용을 필수로 고려해야 합니다.",
      },
      {
        icon: "identification-card",
        title: "실물 여권 소지",
        desc: "주류 주문, 바/클럽 입장 시 나이에 상관없이 신분 확인이 매우 철저하므로 여권 실물 원본을 상시 소지해야 합니다.",
      },
      {
        icon: "exclamation-mark",
        title: "텍스 별도 표기",
        desc: "물건 가격표에는 주(State)별 소비세가 포함되어 있지 않아, 계산서 청구 시 최종 가격이 6~10% 정도 더 높게 나옵니다.",
      },
    ],
  },
  {
    id: "TH",
    name: "태국",
    englishName: "Thailand",
    continent: "asia",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "무비자",
      duration: "최대 90일 체류 가능",
      requirements: "귀국 또는 제3국행 항공권 소지 필수, 현지 체류 경비 증빙 요구 가능성 있음",
      passport: "태국 입국일 기준 최소 6개월 이상 유효한 여권",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/260/detail",
      officialLink: "https://www.thaievisa.go.th/",
      linkText: "태국 외교부 공식 e-Visa 안내 사이트",
    },
    customs: {
      warning:
        "전자담배·베이프·가열담배(IQOS 등)는 기기·액상·부품 모두 반입·소지·사용이 전면 금지입니다. 소지만으로도 최대 징역 10년 또는 물품 가액 5배 벌금 및 압수 대상이니 절대 가져가지 마세요.",
      banned: [
        "전자담배·베이프·가열담배(IQOS) 및 액상·부품 일체",
        "마약류 및 관련 기구",
        "모조 총기·도검류",
        "위조 상표(짝퉁) 물품",
        "음란물",
      ],
      restricted: [
        "담배 200개비·주류 1L 초과 시 과세·신고",
        "외화 US$15,000 상당액 초과 시 신고",
        "불상·불교 유물 반출 시 별도 허가 필요",
      ],
      links: [
        {
          name: "태국 관세청 (Thai Customs)",
          url: "https://www.customs.go.th/",
        },
        {
          name: "태국 정부 – 전자담배 반입 금지 안내",
          url: "https://www.thailand.go.th/issue-focus-detail/009_130",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "타이항공 (Thai Airways)",
        url: "https://www.thaiairways.com/en-la/content/baggage/dangerous-baggage/",
      },
    ],
    regions: [
      {
        id: "bangkok",
        name: "방콕 (중부 평야지대)",
      },
      {
        id: "chiangmai",
        name: "치앙마이 (북부 산악지대)",
      },
    ],
    climate: {
      bangkok: {
        periods: [
          {
            months: [11, 12, 1, 2],
            temp: "22°C ~ 32°C",
            koreanEquivalent: "우리나라의 놀기 좋은 기분 좋은 여름 날씨",
            tip: "건기이자 방콕 최고의 여행 성수기입니다. 습도가 비교적 가라앉아 야외 사원 관람 및 야시장 투어에 아주 최적입니다.",
            items: ["여름 원피스/반팔", "수영복", "실내 쇼핑몰 대비 가벼운 가디건"],
          },
          {
            months: [3, 4, 5],
            temp: "28°C ~ 38°C",
            koreanEquivalent: "우리나라의 극심한 폭염주의보 한여름 날씨",
            tip: "가장 뜨거운 계절(핫 시즌)입니다. 4월 중순에는 열기를 날려버리는 아시아 최대의 물축제 '송크란'이 열립니다. 탈수 방지가 중요합니다.",
            items: ["시원한 민소매/반팔", "버킷햇 및 선글라스", "선크림 & 방수팩(송크란 대비)"],
          },
          {
            months: [6, 7, 8, 9, 10],
            temp: "25°C ~ 33°C",
            koreanEquivalent: "우리나라의 후텁지근한 장마철 기후",
            tip: "몬순 우기입니다. 하루에 1~2회 갑작스럽게 장대비가 쏟아지는 스콜 현상이 발생하므로 즉석 방수 대책을 가방에 넣고 다니세요.",
            items: ["초경량 접이식 우산", "샌들 또는 아쿠아슈즈", "모기기피제 필수"],
          },
        ],
      },
      chiangmai: {
        periods: [
          {
            months: [11, 12, 1, 2],
            temp: "15°C ~ 29°C",
            koreanEquivalent: "우리나라의 선선한 봄/가을 날씨(아침저녁)",
            tip: "북부 고산 지대로 아침/밤에는 15도 이하로 기온이 떨어져 춥다고 느껴질 수 있습니다. 밤바람을 가려줄 바람막이나 긴 소매 옷이 무조건 필요합니다.",
            items: ["바람막이 또는 가디건", "긴 청바지", "도보용 양말"],
          },
          {
            months: [3, 4, 5],
            temp: "24°C ~ 37°C",
            koreanEquivalent: "우리나라의 무덥고 미세먼지 심한 한여름 날씨",
            tip: "기온도 대단히 뜨겁지만, 산악 화전 농경으로 인한 '스모그 시즌(2월 말~4월초)'이 겹칠 수 있으므로 야외 활동 시 황사마스크 착용을 고려하세요.",
            items: ["미세먼지 방지 마스크", "선글라스", "기능성 시원한 반팔"],
          },
          {
            months: [6, 7, 8, 9, 10],
            temp: "23°C ~ 31°C",
            koreanEquivalent: "우리나라의 선선하고 비 내리는 가을 비 날씨",
            tip: "방콕보다 고지대라 우기철에도 약간 더 쾌적하게 비를 즐기며 조용히 머무는 '살아보기 여행'이 가능한 시기입니다.",
            items: ["휴대용 비옷(우비)", "미끄럼 방지 슈즈", "여분의 옷"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "hands-praying",
        title: "사원 복장 규정",
        desc: "왕궁 및 불교 사원 방문 시 무릎 위로 올라오는 반바지/치마, 나시티, 슬리퍼 등 노출이 심한 옷은 입장이 불가하니 미리 가릴 옷을 준비하세요.",
      },
      {
        icon: "taxi",
        title: "그랩 / 볼트 앱 필수",
        desc: "길거리 택시나 툭툭이는 외국인 승객에게 과도한 바가지 요금을 청구하는 경우가 허다하므로 Grab이나 Bolt 앱을 통해 요금을 사전 확정하고 이동하세요.",
      },
      {
        icon: "warning",
        title: "신체 접촉 금기",
        desc: "태국에서는 사람의 머리에 신성한 영혼이 깃들어 있다고 믿으므로, 아이들의 귀여운 머리라도 함부로 만져서는 안 됩니다.",
      },
      {
        icon: "drop",
        title: "생수 구매 마시기",
        desc: "석회 성분이 많아 수돗물을 그냥 마실 수 없으며, 양치질도 생수를 사용하는 것을 적극 권장합니다.",
      },
    ],
  },
  {
    id: "VN",
    name: "베트남",
    englishName: "Vietnam",
    continent: "asia",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "무비자",
      duration: "최대 45일 체류 가능 (최근 확대)",
      requirements: "베트남 입국 후 45일 이내 귀국/제3국행 확약 항공권 소지 필요",
      passport: "입국일 기준 6개월 이상 잔여 유효기간이 있는 여권",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/86/detail",
      officialLink: "https://evisa.xuatnhapcanh.gov.vn/",
      linkText: "베트남 공안부 e-Visa 공식 발급 센터",
    },
    customs: {
      warning:
        "전자담배·베이프는 반입 금지 품목으로 세관에서 압수·벌금 대상입니다. 드론·전문 촬영장비는 국방부 사전 허가가 없으면 공항에서 압수되고 보관료가 발생합니다.",
      banned: [
        "전자담배·베이프 및 액상",
        "마약류·폭발물·무기·군용물자",
        "상아·코뿔소 뿔 등 멸종위기종 제품",
        "반정부·미풍양속 저해 출판물",
      ],
      restricted: [
        "드론·전문 방송장비(국방부·항공청 사전 허가)",
        "외화 US$5,000 또는 1,500만 동 초과 시 신고",
        "금 300g 초과 시 신고",
        "주류 1.5L·담배 200개비 초과 시 과세",
      ],
      links: [
        {
          name: "베트남 관세청 (Vietnam Customs)",
          url: "https://www.customs.gov.vn/",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "베트남항공 (Vietnam Airlines)",
        url: "https://www.vietnamairlines.com/us/en/travel-information/baggage/restricted-baggage",
      },
    ],
    regions: [
      {
        id: "hanoi",
        name: "하노이 (북부 사계절)",
      },
      {
        id: "hochiminh",
        name: "호치민 (남부 완전 열대)",
      },
    ],
    climate: {
      hanoi: {
        periods: [
          {
            months: [12, 1, 2],
            temp: "13°C ~ 20°C",
            koreanEquivalent: "우리나라의 쌀쌀한 초봄 및 늦가을 날씨",
            tip: "베트남 북부는 이 시기에 패딩이나 니트가 필요한 날씨입니다. 특히 일교차가 심하고 습해 뼈에 스며드는 듯한 냉감이 있어 겨울 외투가 반드시 필요합니다.",
            items: ["경량 패딩 또는 자켓", "긴소매 맨투맨/니트", "따뜻한 긴바지"],
          },
          {
            months: [3, 4, 5],
            temp: "22°C ~ 32°C",
            koreanEquivalent: "우리나라의 화창하고 서서히 더워지는 초여름 날씨",
            tip: "여름 우기철로 진입하기 전, 맑고 따뜻하여 하롱베이 유람이나 닌빈 땀콕 관광에 안성맞춤인 여행 최적기입니다.",
            items: ["가벼운 가디건", "여름용 시원한 반팔", "자외선 크림"],
          },
          {
            months: [6, 7, 8, 9, 10, 11],
            temp: "26°C ~ 35°C",
            koreanEquivalent: "우리나라의 무덥고 고온 다습한 폭염 장마철",
            tip: "강수량이 압도적으로 많은 혹서기 우기입니다. 소나기가 일상적으로 찾아오며, 배수로가 일시적으로 넘칠 수 있어 방수 가방과 편안한 신발이 좋습니다.",
            items: ["방수 백팩", "일회용 우의 및 샌들", "휴대용 미니 선풍기"],
          },
        ],
      },
      hochiminh: {
        periods: [
          {
            months: [11, 12, 1, 2, 3, 4],
            temp: "24°C ~ 35°C",
            koreanEquivalent: "우리나라의 전형적인 한여름 불볕 더위",
            tip: "남부는 일교차가 거의 없고 연중 뜨거운 완전한 열대 기후입니다. 11월~4월은 비가 오지 않는 '완벽한 건기'로 여행 수영 및 루프탑 바를 즐기기 아주 좋습니다.",
            items: ["시원한 린넨 반팔", "수영복 및 비치 패션", "선글라스 및 탈수 방지 물통"],
          },
          {
            months: [5, 6, 7, 8, 9, 10],
            temp: "25°C ~ 33°C",
            koreanEquivalent: "우리나라의 소나기가 몰아치는 고온다습한 여름",
            tip: "우기로 짧고 굵은 스콜이 하루에 서너 차례 지나갑니다. 오토바이가 물결치는 도로에 오염된 물이 고이기 쉬우므로 운동화보다 잘 씻기는 아쿠아슈즈가 편합니다.",
            items: ["쉽게 건조되는 신발/슬리퍼", "초경량 우산", "모기 퇴치용 스프레이"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "car-profile",
        title: "도로 횡단 및 오토바이",
        desc: "오토바이 물결이 엄청납니다. 길을 건널 때는 뛰어가지 말고 일정한 속도로 천천히 걸어가야 오토바이들이 스스로 피해갑니다.",
      },
      {
        icon: "motorcycle",
        title: "그랩(Grab) 사용",
        desc: "로컬 오토바이 택시(쎄옴)나 비공식 택시는 미터기 속임수가 많으므로 무조건 그랩 앱으로 예약해 탑승하세요.",
      },
      {
        icon: "money",
        title: "동(VND) 화폐 계산",
        desc: "베트남 화폐는 단위가 매우 큽니다(예: 100,000동 = 약 5천원). 화폐에 0이 많아 헷갈리기 쉬우니 계산 전 꼼꼼히 확인하세요.",
      },
      {
        icon: "drop",
        title: "식당 얼음 주의",
        desc: "로컬 식당에서 음료에 넣어주는 둥글고 가운데 구멍이 뚫린 얼음이 아닌 불규칙한 각얼음은 배탈을 일으킬 수 있으니 장이 예민하면 피하십시오.",
      },
    ],
  },
  {
    id: "FR",
    name: "프랑스",
    englishName: "France",
    continent: "europe",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "무비자",
      duration: "180일 기간 중 최대 90일 체류 (쉥겐 조약 통합 계산)",
      requirements: "유럽 복귀 여정 항공권 및 전 기간 숙소 예약 증빙 필요",
      passport: "쉥겐 지역 출국 예정일 기준 3개월 이상 유효기간이 남아있어야 함",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/248/detail",
      officialLink: "https://france-visas.gouv.fr/",
      linkText: "프랑스 비자 포털 (France-Visas) 공식 웹사이트",
    },
    customs: {
      warning:
        "가품(짝퉁 명품) 휴대 입국은 적발 시 압수는 물론 정품가 기준의 고액 벌금이 부과됩니다. EU 역외(한국 등)산 육류·유제품은 소량이라도 반입이 금지됩니다.",
      banned: [
        "EU 역외산 육류·유제품(햄·치즈·소시지 등)",
        "위조·복제(짝퉁) 물품",
        "마약류",
        "멸종위기 동식물 및 그 제품(CITES)",
      ],
      restricted: [
        "현금 €10,000 상당액 이상 반입·반출 시 신고",
        "면세 한도 초과 담배·주류 신고",
        "의약품 개인 사용량 및 처방전 권장",
      ],
      links: [
        {
          name: "프랑스 세관(Douane) – 여행자 안내",
          url: "https://www.douane.gouv.fr/fiche/what-know-when-travelling-france",
        },
        {
          name: "프랑스 세관 – 육류·유제품 반입 금지",
          url: "https://www.douane.gouv.fr/actualites/meat-and-dairy-products-your-luggage-why-its-forbidden",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "에어프랑스 (Air France)",
        url: "https://wwws.airfrance.us/information/bagages/produits-interdits-et-reglementes",
      },
    ],
    regions: [
      {
        id: "paris",
        name: "파리 (북부 서안해양성)",
      },
      {
        id: "nice",
        name: "니스 (남부 지중해 연안)",
      },
    ],
    climate: {
      paris: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "7°C ~ 17°C",
            koreanEquivalent: "우리나라의 선선하고 다소 쌀쌀한 봄 날씨",
            tip: "해는 점차 늘어나지만 봄비가 잦고 바람이 꽤 불며 아침 기온이 예상보다 낮아 머플러나 스카프 레이어링이 필수입니다.",
            items: ["트렌치 코트", "바람 가려줄 가죽자켓", "튼튼한 가죽 슈즈"],
          },
          {
            months: [6, 7, 8],
            temp: "14°C ~ 26°C",
            koreanEquivalent: "우리나라의 보송보송하고 해가 긴 쾌적한 여름",
            tip: "밤 10시가 넘어서도 해가 지지 않는 환상적인 시즌입니다. 습도는 낮지만, 최근 폭염이 오는 날에는 에어컨이 없는 호텔이나 지하철이 많으므로 미니 부채가 요긴합니다.",
            items: ["선글라스 & 선크림", "시원한 반팔", "미니 부채"],
          },
          {
            months: [9, 10, 11],
            temp: "7°C ~ 18°C",
            koreanEquivalent: "우리나라의 낙엽 지는 선선하고 우수 깊은 늦가을",
            tip: "날씨가 흐려지는 날이 급격히 늘어납니다. 가벼운 외출 시에도 자켓이나 얇은 트렌치를 입어야 한기를 물리칠 수 있습니다.",
            items: ["도톰한 카디건 및 코트", "휴대용 작은 우산", "니트가디건"],
          },
          {
            months: [12, 1, 2],
            temp: "2°C ~ 8°C",
            koreanEquivalent: "우리나라의 한기가 스며드는 초겨울 비 날씨",
            tip: "영하로 뚝 떨어지진 않지만 보슬비가 자주 오며 높은 습도 탓에 '속에서부터 시려오는 뼈추위'가 파리의 특징입니다. 다운점퍼나 코트 가드가 절실합니다.",
            items: ["보온성이 강한 울 코트/패딩", "목도리 & 가죽 장갑", "내수 방수 가공된 부츠"],
          },
        ],
      },
      nice: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "11°C ~ 20°C",
            koreanEquivalent: "우리나라의 포근하고 따사로운 봄~초여름 날씨",
            tip: "지중해성 기후로 북부 파리보다 월등히 따스합니다. 꽃이 만발하고 햇빛이 포근하여 얇은 아우터 정도로 남부 리비에라 투어를 완벽히 만끽할 수 있습니다.",
            items: ["가벼운 가디건", "화창한 연출용 선글라스", "봄 청바지"],
          },
          {
            months: [6, 7, 8],
            temp: "19°C ~ 28°C",
            koreanEquivalent: "우리나라의 휴양하기 좋은 건조한 명품 여름",
            tip: "비가 거의 내리지 않는 완벽한 건조 휴양기입니다. 해변 해수욕에 최상이며, 태양 아래 자외선이 매우 세므로 바닷가용 패킹이 집중되어야 합니다.",
            items: ["수영복 및 비치 타월", "햇볕 차단용 모자", "알로에 수딩젤"],
          },
          {
            months: [9, 10, 11],
            temp: "12°C ~ 23°C",
            koreanEquivalent: "우리나라의 선선한 늦봄~초가을 날씨",
            tip: "10월까지는 바다 입수가 종종 가능할 정도로 남부 특유의 잔잔한 열기가 유지됩니다. 11월에는 비구름이 찾아올 수 있습니다.",
            items: ["가벼운 자켓", "여름옷 믹스패킹", "휴대용 우산"],
          },
          {
            months: [12, 1, 2],
            temp: "6°C ~ 14°C",
            koreanEquivalent: "우리나라의 선선한 가을 날씨",
            tip: "파리와 비교할 수 없을 정도로 겨울이 매우 온화합니다. 눈은 오지 않고 가벼운 가을 자켓이나 도톰한 니트 가디건으로 낭만 가득한 해변 산책을 할 수 있습니다.",
            items: ["가벼운 겨울 코트", "포근한 스카프", "가벼운 운동화"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "bag",
        title: "소매치기 비상",
        desc: "에펠탑, 루브르 박물관 근처 및 지하철 1호선 내부 등에서 휴대폰, 지갑 소매치기가 매우 성행합니다. 가방은 항상 앞으로 메세요.",
      },
      {
        icon: "coffee",
        title: "소리쳐서 종업원 부르기 금지",
        desc: "프랑스 식당에서는 큰 소리로 '웨이터!'라고 부르거나 손을 크게 흔들지 마세요. 웨이터와 눈을 마주치고 눈인사를 보낸 후 기다리는 것이 문화입니다.",
      },
      {
        icon: "hand-waving",
        title: "상점 인사의 중요성",
        desc: "매장이나 식당에 들어설 때 무조건 '봉주르(Bonjour - 안녕하세요)'라고 먼저 육성으로 친근하게 인사해야 대접과 응대가 달라집니다.",
      },
      {
        icon: "ticket",
        title: "지하철 표 소지",
        desc: "파리 지하철을 이용하고 나갈 때까지 표를 버리지 마세요. 역 내에서 불시에 불심검문 요원이 하차 체크를 하여 무표 소지 시 즉석 벌금을 매깁니다.",
      },
    ],
  },
  {
    id: "IT",
    name: "이탈리아",
    englishName: "Italy",
    continent: "europe",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    visa: {
      status: "무비자",
      duration: "180일 중 90일간 체류 가능 (쉥겐 조약)",
      requirements: "유럽 출발 확약 항공권 및 의료비 보장 여행자 보험 증서 지참 권장",
      passport: "유럽(쉥겐지역) 출발 시점을 기준으로 유효기간 3개월 이상 남은 여권",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/179/detail",
      officialLink: "https://vistoperitalia.esteri.it/",
      linkText: "이탈리아 외교부 공식 비자 안내 서비스",
    },
    customs: {
      warning:
        "EU 역외(한국 등)산 육류·유제품(살라미·치즈 등)은 반입이 금지됩니다. 가품(짝퉁) 소지는 범죄로 수백~수천 유로의 벌금 대상이며, 문화재·유물 반출도 엄격히 통제됩니다.",
      banned: [
        "EU 역외산 육류·유제품",
        "위조·복제(짝퉁) 물품",
        "마약류",
        "허가 없는 문화재·유물·미술품",
        "멸종위기 동식물 제품(CITES)",
      ],
      restricted: [
        "현금 €10,000 상당액 이상 신고",
        "면세 한도 초과 담배·주류 신고",
        "의약품 개인 사용량 및 처방전 권장",
      ],
      links: [
        {
          name: "이탈리아 관세청 (Agenzia delle Dogane e dei Monopoli)",
          url: "https://www.adm.gov.it/",
        },
        {
          name: "EU 여행자 휴대품 반입 규정(집행위)",
          url: "https://commission.europa.eu/news-and-media/news/consumer-goods-you-can-carry-your-suitcase-2025-07-22_en",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "이타항공 (ITA Airways)",
        url: "https://www.ita-airways.com/us/en/book-and-prepare/travel-information/baggage/restricted-and-prohibited-items",
      },
    ],
    regions: [
      {
        id: "rome",
        name: "로마 (중남부 온화)",
      },
      {
        id: "milano",
        name: "밀라노 (북부 대륙성)",
      },
    ],
    climate: {
      rome: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "9°C ~ 22°C",
            koreanEquivalent: "우리나라의 선명하고 선선한 늦봄 날씨",
            tip: "로마 유적지를 야외 도보로 하루 2만 보씩 걷기에 가장 적절하고 기분 좋은 건조하고 따뜻한 시기입니다.",
            items: ["가벼운 봄 운동화(돌길 도보용)", "가벼운 가디건", "햇빛가리개 모자"],
          },
          {
            months: [6, 7, 8],
            temp: "18°C ~ 32°C",
            koreanEquivalent: "우리나라의 햇살이 자비없이 타오르는 뜨거운 여름",
            tip: "지중해성 땡볕 기후로 태양이 매우 타는 듯 강력합니다. 모자, 자외선 차단제는 필수이며 시내 곳곳 로마식 수도시설(나소네) 식수를 받을 텀블러 지참이 유용합니다.",
            items: ["자외선 차단 스포츠 선크림", "선글라스 및 휴대용 보틀", "땀흡수 잘되는 의류"],
          },
          {
            months: [9, 10, 11],
            temp: "10°C ~ 23°C",
            koreanEquivalent: "우리나라의 청량하고 비가 서서히 잦아지는 가을",
            tip: "10월까지는 테라스 식사를 하기에 훌륭한 온화함이 이어집니다. 다만 11월은 이탈리아 전국적으로 비구름이 가장 활발한 우기입니다.",
            items: ["바람막이 자켓", "휴대용 튼튼한 우산", "가을 아우터"],
          },
          {
            months: [12, 1, 2],
            temp: "4°C ~ 13°C",
            koreanEquivalent: "우리나라의 초겨울에서 선선한 가을 밤날씨",
            tip: "영하권 이하 강추위는 없으나, 오래된 성당이나 박물관 실내 공기가 석조건물 특성상 서늘하게 스며듭니다. 도톰한 가죽슈즈와 니트를 추천합니다.",
            items: ["자켓 또는 얇은 패딩", "스카프", "기모 가미된 운동화/구두"],
          },
        ],
      },
      milano: {
        periods: [
          {
            months: [3, 4, 5],
            temp: "6°C ~ 18°C",
            koreanEquivalent: "우리나라의 쌀쌀한 환절기 봄 날씨",
            tip: "알프스 산맥과 인접한 북부 평원으로 로마보다 평균 기온이 3~5도 낮습니다. 특히 봄 가뭄이나 찬바람이 불어 트렌치코트나 두꺼운 블루종이 필요합니다.",
            items: ["트렌치 코트", "두터운 스카프", "스웨터"],
          },
          {
            months: [6, 7, 8],
            temp: "16°C ~ 29°C",
            koreanEquivalent: "우리나라의 쾌적하고 살짝 무더운 초여름",
            tip: "도시 전역이 패션의 발상지답게 모던한 반팔과 스타일리시한 긴소매를 믹스매치하기 좋은 시기입니다. 늦여름 천둥번개성 소나기를 대비하세요.",
            items: ["패셔너블한 여름 반팔", "자외선 차단 선글라스", "가벼운 접이식 우산"],
          },
          {
            months: [9, 10, 11],
            temp: "8°C ~ 20°C",
            koreanEquivalent: "우리나라의 차갑고 서리 내리는 겨울 초입 날씨",
            tip: "11월의 밀라노는 한낮에도 흐리고 안개(네비아)가 짙게 끼며 일교차가 아주 큽니다. 감기 예방용 보온 보습대책이 패킹의 중심입니다.",
            items: ["보온용 가벼운 외투/패딩", "보습 크림", "따뜻한 이너웨어"],
          },
          {
            months: [12, 1, 2],
            temp: "-1°C ~ 7°C",
            koreanEquivalent: "우리나라의 눈바람 부는 한겨울 날씨",
            tip: "영하권에 빈번히 근접하여 습하고 대단히 차가운 공기가 정체됩니다. 두꺼운 다운점퍼나 양모 코트가 생존 가방에 포함되어야 합니다.",
            items: ["헤비 다운 또는 울코트", "방한화 및 부츠", "가죽 장갑"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "ticket",
        title: "숙박 도시세(City Tax)",
        desc: "체크아웃 시 1인당 1박 기준으로 도시 세금(약 3~7유로)을 카드 대신 무조건 현금으로 지급을 요구하는 호텔이 많으므로 잔여 현금을 항상 남겨두세요.",
      },
      {
        icon: "coffee",
        title: "자릿세(Coperto)",
        desc: "카페나 식당에서 테이블에 앉아 먹으면 영수증에 자릿세(Coperto)가 따로 인원수대로 추가 청구됩니다. 스탠딩 바(Bar)에서 가볍게 커피를 즐기면 훨씬 저렴합니다.",
      },
      {
        icon: "police-car",
        title: "서명 강요, 팔찌 강매 사기",
        desc: "로컬 성당이나 광장에서 다짜고짜 다가와 평화의 서명을 해달라거나, 손목에 우정의 가죽 실팔찌를 묶어주며 고액의 돈을 갈취하려는 사기꾼들을 단호하게 무시하고 가던 길을 가십시오.",
      },
      {
        icon: "bus",
        title: "대중교통 티켓 펀칭",
        desc: "버스나 기차 티켓을 구매하고 타서 끝이 아닌, 반드시 정류장이나 플랫폼 내부의 미니 기계에 기차표를 넣어 펀칭(개표)해야 유효합니다. 안 할 시 막대한 벌금이 나옵니다.",
      },
    ],
  },
  {
    id: "PH",
    name: "필리핀",
    englishName: "Philippines",
    continent: "asia",
    flag: "🇵🇭",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "무비자",
      duration: "최대 30일간 무비자 체류",
      requirements: "출국 72시간 전까지 필리핀 전자입국신고서(eTravel) 온라인 등록 필수 및 QR 코드 캡처 소지",
      passport: "입국일 기준으로 여권의 유효기간이 최소 6개월 이상 유지될 것",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/252/detail",
      officialLink: "https://etravel.gov.ph/",
      linkText: "필리핀 정부 eTravel 공식 등록 웹사이트",
    },
    customs: {
      warning:
        "현지화 50,000페소 초과 또는 미화 US$10,000 상당액 초과 현금은 반드시 세관에 신고해야 하며, 미신고 시 압수 대상입니다. 총기·폭발물·마약은 엄격히 금지됩니다.",
      banned: ["총기·탄약·폭발물·전쟁무기", "마약류 및 향정신성 물질", "낙태 유발 약품·기구", "도박 기계", "음란물"],
      restricted: [
        "현지화 ₱50,000 초과 반입·반출 시 사전 승인",
        "외화 US$10,000 상당액 초과 시 신고",
        "과일·식물은 식물검역증(phytosanitary) 필요",
        "관상어는 수산자원국(BFAR) 수입허가 필요",
      ],
      links: [
        {
          name: "필리핀 관세청(Bureau of Customs) – 여행자 안내",
          url: "https://customs.gov.ph/boc-reiterates-existing-rules-on-currency-declaration-for-travelers/",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "필리핀항공 (Philippine Airlines)",
        url: "https://www.philippineairlines.com/ph/en/before-you-fly/baggage-information/restricted-items.html",
      },
      {
        name: "세부퍼시픽 (Cebu Pacific)",
        url: "https://www.cebupacificair.com/en-PH/pages/travel-info/baggage-information/dangerous-goods",
      },
    ],
    regions: [
      {
        id: "manila",
        name: "마닐라 (필리핀 도심지)",
      },
      {
        id: "cebu",
        name: "세부 (해안 휴양지)",
      },
    ],
    climate: {
      manila: {
        periods: [
          {
            months: [12, 1, 2],
            temp: "23°C ~ 31°C",
            koreanEquivalent: "우리나라의 놀기 좋은 산뜻한 초여름 날씨",
            tip: "가장 쾌적하고 덜 습하며 바람이 통하는 연중 최적의 건기 도심 투어 골든 시즌입니다.",
            items: ["얇은 반팔과 통풍 바지", "스니커즈", "선크림"],
          },
          {
            months: [3, 4, 5],
            temp: "26°C ~ 35°C",
            koreanEquivalent: "우리나라의 푹푹 찌는 찜통 한여름",
            tip: "열사병 위험이 높습니다. 도심 매장과 거대한 몰 인근은 에어컨으로 온도가 극단적으로 냉방 중이므로 가디건을 꼭 가방에 가드하세요.",
            items: ["실내용 가벼운 외투", "탈수 방지 미니 물병", "모자"],
          },
          {
            months: [6, 7, 8, 9, 10, 11],
            temp: "25°C ~ 32°C",
            koreanEquivalent: "우리나라의 매서운 장마철 및 다습한 여름",
            tip: "태풍(바기오)의 영향으로 도심지 대규모 침수나 정전이 간혹 벌어질 수 있습니다. 이동 경로의 기상을 항상 확인하십시오.",
            items: ["소형 접이식 우산", "물에 젖는 고무 슬리퍼", "모기 퇴치 패치"],
          },
        ],
      },
      cebu: {
        periods: [
          {
            months: [12, 1, 2],
            temp: "24°C ~ 31°C",
            koreanEquivalent: "우리나라의 바다 수영하기 좋은 따뜻한 초여름",
            tip: "최상의 에메랄드 해안 수영 골든 아워입니다. 바다 속 시야가 맑아 호핑 투어나 스노클링, 다이빙 시 최상의 풍경을 담을 수 있습니다.",
            items: ["수영복 및 래쉬가드", "아쿠아슈즈", "방수팩"],
          },
          {
            months: [3, 4, 5],
            temp: "25°C ~ 33°C",
            koreanEquivalent: "우리나라의 태양이 작열하는 폭염 여름",
            tip: "태양이 지나치게 세므로 화상 방지가 관건입니다. 바다 수영 후 급격히 피부를 가라앉혀 줄 알로에 젤을 무조건 가져가세요.",
            items: ["선 차단 고기능 크림", "선글라스 및 버킷햇", "애프터선 진정젤"],
          },
          {
            months: [6, 7, 8, 9, 10, 11],
            temp: "25°C ~ 32°C",
            koreanEquivalent: "우리나라의 비가 수시로 지나가는 여름 바다",
            tip: "우기철이나 스콜이 오더라도 보홀, 세부 해역은 지형 특성상 태풍이 직격하지 않는 한 수영에 영향이 적은 복합 날씨입니다.",
            items: ["비치타월", "방수 자켓", "충전 보조배터리"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "taxi",
        title: "그랩(Grab) 강추",
        desc: "마닐라나 세부 같은 대도시의 로컬 일반 택시는 잔돈을 안 주거나 미터기 조작이 일상입니다. 안정적으로 그랩 앱을 사용하세요.",
      },
      {
        icon: "drop",
        title: "석회성 수돗물 주의",
        desc: "배탈 예방을 위해 식수 및 양치질에 전면 생수를 구매해서 쓰시는 것을 안전상 강력 추천합니다.",
      },
      {
        icon: "wallet",
        title: "잔돈(페소) 소지",
        desc: "길거리 트라이시클이나 현지 노점상 이용 시 1,000페소나 500페소 같은 고액권 지폐를 내밀면 거스름돈이 없다고 하는 경우가 대부분이므로, 편의점 등에서 미리 잔돈으로 쪼개 놓으세요.",
      },
      {
        icon: "hand-waving",
        title: "여유로운 마음가짐(필리핀 타임)",
        desc: "필리핀은 모든 일처리가 한국보다 매우 느긋합니다. 식당 서빙이나 호텔 체크인이 느리더라도 화내지 말고 여유롭게 대기하는 미덕이 필요합니다.",
      },
    ],
  },
  {
    id: "AU",
    name: "호주",
    englishName: "Australia",
    continent: "oceania",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    visa: {
      status: "전자여행허가 (ETA)",
      duration: "최대 90일 체류 가능",
      requirements:
        "출발 전 전용 모바일 앱 'AustralianETA'를 스마트폰에 다운로드하여 본인이 직접 여권 스캔 후 승인 필수 (수수료 AUD 20)",
      passport: "체류 예정 전 기간 및 출국일까지 잔여 기한이 안전하게 남아있는 여권",
      mofaLink: "https://www.0404.go.kr/ntnSafetyInfo/255/detail",
      officialLink: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
      linkText: "호주 내무부 공식 ETA 모바일 신청 가이드",
    },
    customs: {
      warning:
        "세계 최고 강도의 검역(Biosecurity)이 적용됩니다. 꿀·육포·생과일·목공예품은 물론 먹던 간식·초콜릿 한 조각까지 입국카드에 반드시 '자진 신고'해야 하며, 미신고 시 최대 AUD 2,664 과태료 또는 비자 취소 대상입니다.",
      banned: [
        "가공되지 않은 육류·생과일·채소·씨앗",
        "살아있는 식물·동물 및 흙이 묻은 물품",
        "마약류 및 관련 기구",
        "무기·총기류",
      ],
      restricted: [
        "모든 식품·유제품·꿀·목재/씨앗 제품은 입국카드에 신고 필수",
        "현금 AUD 10,000 상당액 이상 신고",
        "의약품은 개인 사용량 및 처방전 소지 권장",
      ],
      links: [
        {
          name: "호주 국경군(ABF) – 반입 가능 여부(식품)",
          url: "https://www.abf.gov.au/entering-and-leaving-australia/can-you-bring-it-in/categories/food",
        },
        {
          name: "호주 농림수산부(DAFF) – 입국 검역 안내",
          url: "https://www.agriculture.gov.au/biosecurity-trade/travelling/to-australia",
        },
      ],
    },
    foreignAirlines: [
      {
        name: "콴타스항공 (Qantas)",
        url: "https://help.qantas.com/support/s/article/Items-not-allowed-in-carry-on-baggage",
      },
    ],
    regions: [
      {
        id: "sydney",
        name: "시드니 (동남부 온대)",
      },
      {
        id: "cairns",
        name: "케언즈 (북부 열대)",
      },
    ],
    climate: {
      sydney: {
        periods: [
          {
            months: [12, 1, 2],
            temp: "18°C ~ 26°C",
            koreanEquivalent: "남반구 여름 날씨 (한국의 화창한 6~7월)",
            tip: "한국의 한겨울에 마주하는 호주의 한여름 성수기입니다. 단 오존층이 얇아 직사광선이 매우 기하학적으로 치명적이니 30분 단위 선크림 보강이 필수입니다.",
            items: ["강력 오존선크림", "선글라스 및 수영 원피스", "얇은 셔츠"],
          },
          {
            months: [3, 4, 5],
            temp: "12°C ~ 22°C",
            koreanEquivalent: "남반구 가을 날씨 (한국의 선선한 10월)",
            tip: "쾌적하고 건조한 블루마운틴 하이킹 적기입니다. 다만 오후 5시가 되면 공기가 빠르게 가라앉아 우리나라의 가을 저녁처럼 서늘하니 아우터가 필요합니다.",
            items: ["야외용 트레킹화", "가디건 혹은 후드짚업", "보습 크림"],
          },
          {
            months: [6, 7, 8],
            temp: "8°C ~ 17°C",
            koreanEquivalent: "남반구 겨울 날씨 (한국의 쌀쌀한 초겨울)",
            tip: "바닷바람이 강하게 불어 서울의 늦가을~초겨울처럼 체감상 무척 춥습니다. 실내 보일러 난방이 없어 밤에 숙소 내부 온도가 낮으니 포근한 긴팔 수면 의류가 좋습니다.",
            items: ["도톰한 경량 패딩", "바람막이 점퍼", "실내용 포근한 파자마"],
          },
          {
            months: [9, 10, 11],
            temp: "11°C ~ 23°C",
            koreanEquivalent: "남반구 봄 날씨 (한국의 포근한 4~5월)",
            tip: "보랏빛의 아름다운 자카란다 꽃이 활짝 덮이는 걷기 가장 예쁜 호주의 환상 봄 시즌입니다. 아침저녁 일교차만 얇은 가디건으로 케어하세요.",
            items: ["봄바람 대비용 얇은 점퍼", "산책용 가벼운 단화", "선글라스"],
          },
        ],
      },
      cairns: {
        periods: [
          {
            months: [12, 1, 2, 3, 4],
            temp: "23°C ~ 32°C",
            koreanEquivalent: "남반구 우기 열대 기후 (한국의 고온다습 여름)",
            tip: "그레이트 배리어 리프의 북부 열대 지방으로 연중 따뜻합니다. 단, 이 시기는 몬순 우기로 소나기와 습도가 아주 뜨겁게 극성입니다. 실내 에어컨이 아주 강하게 틀어져 있습니다.",
            items: ["래쉬가드 & 방수 가방", "실내용 에어컨 가디건", "아쿠아슈즈"],
          },
          {
            months: [5, 6, 7, 8, 9, 10, 11],
            temp: "17°C ~ 29°C",
            koreanEquivalent: "쾌적하고 따스한 골든타임 휴양여름",
            tip: "케언즈의 건기이자 호주 최고의 액티비티 천국 시즌입니다. 습도가 완벽하게 조율되어 상쾌하고 시원한 바람이 불며 해수욕을 원 없이 힐링할 수 있는 럭셔리 시즌입니다.",
            items: ["휴양지 원피스/비치 팬츠", "레포츠용 선크림", "시원한 반팔"],
          },
        ],
      },
    },
    localTips: [
      {
        icon: "sun",
        title: "초강력 자외선 지수",
        desc: "호주는 오존층 파괴 지역과 가까워 자외선이 타 국가에 비해 치명적으로 강합니다. 흐린 날에도 외출 20분 전 선크림 도포는 상식입니다.",
      },
      {
        icon: "car-profile",
        title: "운전석 및 우측 통행 반대",
        desc: "차량 운전석 및 도로 통행 방향이 한국과 완전히 반대(좌측 통행)입니다. 도보 횡단 시나 렌터카 주행 시 역주행 방지를 위해 방향을 끊임없이 살피세요.",
      },
      {
        icon: "clock",
        title: "자연 친화 칼퇴근 샵",
        desc: "대부분의 개인 카페, 로드샵, 백화점 등이 평일 오후 5시가 되면 어김없이 영업을 칼같이 종료합니다. 쇼핑이나 외식 일정을 아주 일찍 앞당기셔야 합니다.",
      },
      {
        icon: "warning",
        title: "무단횡단 고액 벌금",
        desc: "호주는 보행 신호를 준수하지 않고 무단 횡단하는 행위를 경찰이 엄격히 단속하며 적발 시 자비 없이 엄청난 과태료 티켓을 발급합니다.",
      },
    ],
  },
];

/** id로 국가를 조회. 없으면 첫 번째 국가를 기본값으로 반환한다. */
export const getCountryById = (id: string): Country => COUNTRIES.find((c) => c.id === id) ?? COUNTRIES[0];
