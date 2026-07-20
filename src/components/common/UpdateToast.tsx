import { useEffect, useState } from 'react';

/**
 * 앱 첫 진입 시 상단에 잠깐 떴다 사라지는 안내 토스트.
 * 화면 고정 라벨(REAL-TIME) 대신, '최신 정보가 반영됨'을 은은하게 전달해
 * 실시간성을 강조하되 시야를 방해하지 않는다.
 */
export function UpdateToast() {
  // mounted: DOM 유지 여부, shown: 페이드 상태
  const [mounted, setMounted] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const appear = setTimeout(() => setShown(true), 150);
    const fade = setTimeout(() => setShown(false), 3000);
    const unmount = setTimeout(() => setMounted(false), 3500);
    return () => {
      clearTimeout(appear);
      clearTimeout(fade);
      clearTimeout(unmount);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-16 lg:top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1.5'
      }`}
    >
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-soft backdrop-blur-sm">
        <i className="ph-fill ph-sparkle text-slate-400 text-xs" />
        <span className="text-[11px] font-bold text-slate-500 whitespace-nowrap">
          최신 여행 정보가 반영되었어요
        </span>
      </div>
    </div>
  );
}
