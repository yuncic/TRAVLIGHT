import { FEATURES, PAIN_POINTS, TRUST_SOURCES } from "./landingContent";
import { trackEnter } from "../../lib/analytics";

interface LandingPageProps {
  /** 'TravLight 이용하기' 클릭 시 실제 서비스로 진입 */
  onEnter: () => void;
}

/** 재사용 CTA 버튼 */
function EnterButton({
  onEnter,
  label,
  source,
}: {
  onEnter: () => void;
  label: string;
  source: "hero" | "final_cta";
}) {
  return (
    <button
      onClick={() => {
        trackEnter(source);
        onEnter();
      }}
      className="focus-ring group inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white text-base lg:text-lg font-extrabold rounded-full shadow-float transition-all active:scale-95"
    >
      {label}
      <i className="ph-bold ph-arrow-right text-lg transition-transform group-hover:translate-x-1" />
    </button>
  );
}

/** 섹션 제목 (작은 태그 + 큰 제목) */
function SectionTitle({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="text-center mb-12 lg:mb-20">
      <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs lg:text-sm font-extrabold rounded-full mb-3 tracking-wide">
        {tag}
      </span>
      <h2 className="text-2xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">{title}</h2>
    </div>
  );
}

/**
 * 서비스 소개 랜딩 페이지.
 * 접속 시 가장 먼저 노출되며, 불편함 → 제공 정보 → 신뢰성 순으로 소개한 뒤
 * 하단 CTA로 실제 서비스에 진입한다.
 */
export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 상단 로고 바 */}
      <header className="sticky top-0 z-40 h-14 bg-white/90 backdrop-blur-md border-b border-slate-100 px-5 lg:px-10 flex items-center justify-between">
        <span className="text-xl font-black text-brand-500 tracking-wider">TRAVLIGHT</span>
        <button
          onClick={() => {
            trackEnter("nav");
            onEnter();
          }}
          className="focus-ring text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          바로 시작 →
        </button>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-brand-100 text-brand-600 text-xs lg:text-sm font-bold rounded-full mb-6 shadow-sm">
            <i className="ph-fill ph-airplane-tilt" /> 여행 준비, 이제 검색 그만
          </span>
          <h1 className="text-3xl lg:text-6xl font-black leading-[1.2] tracking-tight text-slate-900">
            가려는 나라의 준비 정보
            <br />
            <span className="text-brand-500">한 곳에서 공식 출처로</span>
          </h1>
          <p className="mt-7 text-sm lg:text-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            비자·입국 서류부터 세관 반입 규정, 항공사 수하물,
            <br />
            날씨·패킹, 현지 꿀팁까지
            <br />
            흩어진 여행 준비 정보를 TravLight 하나로 확인하세요.
          </p>
          <div className="mt-11">
            <EnterButton onEnter={onEnter} label="TravLight 이용하기" source="hero" />
          </div>
          <div className="mt-16 flex flex-col items-center gap-1 text-slate-300">
            <span className="text-[11px] font-bold tracking-widest">SCROLL</span>
            <i className="ph ph-caret-double-down animate-bounce text-lg" />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="px-5 lg:px-10 py-20 lg:py-28 bg-slate-50/70">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            tag="이런 적 있으셨죠?"
            title={
              <>
                여행 준비가 어려웠던 건 정보가 없어서가 아니라
                <br />
                <span className="text-slate-400">여기저기 흩어져 있어서예요</span>
              </>
            }
          />
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-7">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl p-6 lg:p-8 shadow-soft border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4">
                  <i className={`ph-fill ph-${p.icon} text-2xl`} />
                </div>
                <h3 className="text-base lg:text-lg font-extrabold text-slate-800 mb-1.5">{p.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 lg:px-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            tag="TravLight 하나면"
            title={
              <>
                떠나기 전 알아야 할 모든 것을
                <br />
                <span className="text-brand-500">국가별로 한 번에</span>
              </>
            }
          />
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
            {FEATURES.map((f, idx) => (
              <div
                key={f.tag}
                className={`bg-white rounded-3xl p-6 lg:p-8 shadow-soft border border-slate-100 flex gap-5 items-start ${
                  idx === FEATURES.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <i className={`ph-fill ph-${f.icon} text-3xl`} />
                </div>
                <div>
                  <span className="text-[11px] font-black text-brand-500 uppercase tracking-wider">{f.tag}</span>
                  <h3 className="text-lg font-extrabold text-slate-800 mt-0.5 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-5 lg:px-10 py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            tag="믿을 수 있는 정보만"
            title={
              <>
                블로그 열 개를 비교하지 마세요
                <br />
                <span className="text-brand-500">공식 출처를 바로 붙였습니다</span>
              </>
            }
          />
          <p className="text-center text-sm lg:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto -mt-4 mb-10">
            TravLight의 모든 핵심 정보에는 정부·기관·항공사의 공식 출처 링크가 함께 있습니다. 앱이 대신 원문을 찾아
            정리했고, 출처를 숨기지 않으니 직접 눌러 확인할 수 있어요.
          </p>
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-7">
            {TRUST_SOURCES.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3">
                  <i className={`ph-fill ph-${s.icon} text-2xl`} />
                </div>
                <h3 className="text-sm font-extrabold text-slate-800 mb-1">{s.name}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs lg:text-sm text-slate-400 font-medium">
            <i className="ph-fill ph-seal-check text-brand-500 text-base" />
            정보는 흩어져 있을수록 불안합니다. TravLight는 출처를 투명하게 보여드립니다.
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 lg:px-10 py-24 lg:py-32 bg-slate-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight">
            이제 준비를 시작해볼까요?
          </h2>
          <p className="mt-4 text-sm lg:text-base text-slate-400 font-medium">
            가고 싶은 나라를 고르면, 필요한 모든 정보가 한 화면에 펼쳐집니다.
          </p>
          <div className="mt-9">
            <EnterButton onEnter={onEnter} label="TravLight 이용하기" source="final_cta" />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 px-4 text-center border-t border-slate-800">
        <p className="text-[11px] text-slate-500 leading-relaxed">
          본 서비스는 프론트엔드 프로토타입입니다. 규정·기후 정보는 수시로 바뀌므로 출국 전 각 공식 출처에서 재확인해
          주세요.
        </p>
      </footer>
    </div>
  );
}
