import type { Country } from '../../types/country';
import { SectionHeader } from '../common/SectionHeader';
import { OfficialLinkButton } from '../common/OfficialLinkButton';

interface ProhibitedTabProps {
  country: Country;
}

interface ItemListCardProps {
  icon: string;
  iconColor: string;
  bulletIcon: string;
  bulletColor: string;
  title: string;
  items: string[];
}

/** 반입 금지/신고 필요 품목을 나열하는 카드 */
function ItemListCard({ icon, iconColor, bulletIcon, bulletColor, title, items }: ItemListCardProps) {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-soft border border-slate-100">
      <div className="flex items-center gap-2 mb-3 text-slate-800 font-extrabold text-sm border-b border-slate-100 pb-2.5">
        <i className={`ph-fill ph-${icon} text-lg ${iconColor}`} /> {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 font-medium">
            <i className={`ph ph-${bulletIcon} ${bulletColor} text-sm mt-0.5 shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 반입 규정 탭: 국가별 세관·검역 기준 반입 금지/제한 물품 + 공식 세관 출처 */
export function ProhibitedTab({ country }: ProhibitedTabProps) {
  const { customs } = country;

  return (
    <div className="space-y-4 animate-fade-in">
      <SectionHeader title={`${country.name} 입국 시 반입 금지·제한 물품`} icon="prohibit" />

      {customs.warning && (
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex gap-3 shadow-sm">
          <div className="text-rose-500 mt-0.5 shrink-0">
            <i className="ph-fill ph-warning-octagon text-xl" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-rose-800 mb-0.5">{country.name} 세관·검역 필수 주의사항</p>
            <p className="text-xs text-rose-700 leading-relaxed font-medium">{customs.warning}</p>
          </div>
        </div>
      )}

      <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
        <ItemListCard
          icon="prohibit"
          iconColor="text-rose-500"
          bulletIcon="x-circle"
          bulletColor="text-rose-400"
          title="반입 금지 품목"
          items={customs.banned}
        />
        <ItemListCard
          icon="note-pencil"
          iconColor="text-amber-500"
          bulletIcon="warning-circle"
          bulletColor="text-amber-400"
          title="신고·허가 필요 품목"
          items={customs.restricted}
        />
      </div>

      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-slate-100">
        <div className="flex items-center gap-1.5 mb-3">
          <i className="ph-fill ph-seal-check text-brand-600 text-sm" />
          <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">공식 세관·검역 출처</p>
        </div>
        <div className="space-y-2">
          {customs.links.map((link) => (
            <OfficialLinkButton key={link.url} href={link.url} label={link.name} icon="buildings" variant="neutral" />
          ))}
        </div>
      </div>

      <p className="text-[10px] text-slate-400 text-center mt-2 leading-relaxed">
        * 반입 금지·제한 품목은 각국 세관·검역 당국의 규정이며 수시로 바뀝니다. 항공기 내 휴대·위탁 규정은{' '}
        <b>항공사 규정</b> 탭에서 별도로 확인하세요.
      </p>
    </div>
  );
}
