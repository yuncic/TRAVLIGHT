# 트래블라잇 (TravLight)

국가별 여행 정보(비자·입국 조건, 세관 반입 규정, 항공사 수하물 규정, 도시별 날씨·패킹, 현지 꿀팁)를 한곳에서 제공하는 웹앱입니다.

단일 HTML 프로토타입을 **React + TypeScript + Vite** 기반의 실제 프로젝트 구조로 이전했습니다. 관심사 분리(SoC)와 단일 책임 원칙(SRP)에 따라 데이터·상태·컴포넌트를 파일 단위로 분리했습니다.

## 실행

```bash
npm install
npm run dev        # 개발 서버
npm run build      # 타입체크 + 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
npm run typecheck  # 타입 검사만
```

## 폴더 구조

```
src/
├─ main.tsx                # 엔트리 포인트
├─ Root.tsx                # 랜딩 ↔ 서비스 전환 (접속 시 소개 먼저)
├─ App.tsx                 # 서비스 본체 조립(composition)만 담당
├─ index.css              # Tailwind + 전역 스타일/애니메이션
│
├─ types/
│  └─ country.ts           # 도메인 타입 정의(단일 출처)
│
├─ data/                   # 정적 데이터 (상태 아님)
│  ├─ countries.ts         # 국가별 정보 + getCountryById
│  ├─ continents.ts        # 대륙 필터 목록
│  └─ airlines.ts          # 국내 항공사 · 공통 항공 규정
│
├─ constants/
│  └─ tabs.ts              # 탭 정의 (추가/변경 시 이 파일만 수정)
│
├─ lib/                    # 순수 유틸(테스트·재사용 용이)
│  ├─ temperature.ts       # 기온 파싱·정규화
│  └─ tipCategory.ts       # 꿀팁 카테고리 매핑/스타일
│
├─ hooks/                  # 상태관리 (관심사별 1파일)
│  ├─ useCountrySelection.ts
│  ├─ usePacking.ts        # 지역·월·체크리스트 + 파생값
│  ├─ useCountryFilter.ts  # 검색·대륙 필터
│  ├─ useImageStatus.ts    # 히어로 이미지 로딩/에러
│  └─ useDisclosure.ts     # 열림/닫힘 범용 훅
│
└─ components/
   ├─ common/              # 재사용 프레젠테이션 컴포넌트
   │  ├─ SectionHeader.tsx
   │  ├─ VisaBadge.tsx
   │  ├─ TempRangeBar.tsx
   │  ├─ OfficialLinkButton.tsx   # 외부 공식 링크 버튼(공용)
   │  └─ CountryChips.tsx         # 국가 퀵픽 칩(데스크탑/모바일 공용)
   ├─ layout/              # 레이아웃 골격
   │  ├─ Header.tsx
   │  ├─ HeroImage.tsx
   │  ├─ TabBar.tsx        # 인디케이터 너비 자동 계산
   │  └─ Footer.tsx
   ├─ tabs/                # 탭별 화면
   │  ├─ VisaTab.tsx
   │  ├─ ProhibitedTab.tsx
   │  ├─ AirlineTab.tsx
   │  ├─ TipsTab.tsx
   │  ├─ PackingTab.tsx
   │  └─ packing/          # 패킹 탭 하위 부품
   │     ├─ MonthPicker.tsx
   │     └─ PackingChecklist.tsx
   ├─ modal/
   │  └─ CountrySelectorModal.tsx
   └─ landing/                     # 서비스 소개 랜딩 페이지
      ├─ LandingPage.tsx           # 페인 → 기능 → 신뢰성 → CTA
      └─ landingContent.ts         # 랜딩 카피/데이터(마크업과 분리)
```

## 화면 흐름

접속 시 **서비스 소개 랜딩**(`LandingPage`)이 먼저 뜹니다. 불편함 → 제공 정보(5개 영역) → 신뢰성(공식 출처) 순으로 소개하고, 하단의 **`TravLight 이용하기 →`** 버튼(또는 상단 `바로 시작`)을 누르면 실제 서비스(`App`)로 전환됩니다. 전환은 `Root.tsx`의 상태 하나로 관리합니다.

## 설계 원칙

- **데이터 ≠ 상태**: 국가·항공사·세관 정보 등 고정값은 `data/`에 상수로 두고, 사용자 조작값만 훅으로 상태 관리합니다. 추후 API/DB 연동 시 `data/` 모듈만 교체하면 됩니다.
- **파생값은 계산**: 선택 국가 객체, 현재 기후 기간, 필터링된 국가 목록 등은 상태가 아니라 `useMemo`로 계산합니다.
- **관심사별 훅 분리(SRP)**: 국가 선택 / 패킹 / 필터 / 이미지 상태 / 열림닫힘을 각각의 훅으로 분리해 재사용·테스트가 쉽습니다.
- **확장 지점 최소화**: 탭 추가는 `constants/tabs.ts` + 탭 컴포넌트 1개, 국가 추가는 `data/countries.ts` 한 곳에서 끝납니다.
- **외부 상태관리 라이브러리 불필요**: 이 규모에서는 지역 상태 + props로 충분합니다. 전역 공유가 필요해지면 Context를 얇게 추가하는 방향을 권장합니다.

## 향후 확장 아이디어

- 선택 국가/탭을 URL 라우팅으로 이전 → "일본 반입 규정" 링크 공유·북마크 가능
- `data/countries.ts`를 원격 API로 교체 (타입은 그대로 재사용)
- 각 `lib/` 순수 함수에 단위 테스트 추가
