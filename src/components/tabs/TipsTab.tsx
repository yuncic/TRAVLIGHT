import type { Country } from '../../types/country';
import { CATEGORY_META, getTipCategory } from '../../lib/tipCategory';
import { SectionHeader } from '../common/SectionHeader';

interface TipsTabProps {
  country: Country;
}

/** 현지 꿀팁 탭: 카테고리별로 색 구분된 팁 카드 */
export function TipsTab({ country }: TipsTabProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <SectionHeader title="실패 없는 리얼 현지 적응 꿀팁" icon="magic-wand" />

      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        {country.localTips.map((tip, idx) => {
          const cat = CATEGORY_META[getTipCategory(tip.icon)];
          return (
            <div
              key={idx}
              className={`bg-white p-4 rounded-2xl shadow-soft border border-slate-100 border-l-4 ${cat.border} flex gap-3.5`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <i className={`ph ph-${tip.icon} text-xl text-slate-600`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="font-extrabold text-slate-800 text-sm">{tip.title}</h4>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${cat.bg} ${cat.text}`}>{cat.label}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{tip.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
