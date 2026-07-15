import type { Tab, TabId } from '../../constants/tabs';

interface TabBarProps {
  tabs: Tab[];
  activeTab: TabId;
  onChange: (id: TabId) => void;
}

/**
 * 스티키 탭바. 슬라이딩 인디케이터의 너비는 탭 개수에서 자동 계산하므로,
 * TABS 배열에 탭을 추가/삭제해도 별도 수정이 필요 없다.
 */
export function TabBar({ tabs, activeTab, onChange }: TabBarProps) {
  const activeTabIndex = tabs.findIndex((t) => t.id === activeTab);
  const indicatorWidth = 100 / tabs.length;

  return (
    <div className="sticky top-14 lg:top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
      <div className="flex relative lg:max-w-3xl lg:mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
            className={`focus-ring flex-1 py-3.5 lg:py-4 flex flex-col lg:flex-row lg:justify-center items-center gap-1 lg:gap-2 text-[11px] lg:text-sm font-bold tracking-tight transition-colors ${
              activeTab === tab.id ? 'text-brand-500' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <i className={`ph ph-${tab.icon} text-xl mb-0.5 lg:mb-0`} />
            {tab.label}
          </button>
        ))}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-brand-500 rounded-t-full transition-transform duration-300 ease-out"
          style={{ width: `${indicatorWidth}%`, transform: `translateX(${activeTabIndex * 100}%)` }}
        />
      </div>
    </div>
  );
}
