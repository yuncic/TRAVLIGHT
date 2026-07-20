import type { Country, DrivingStatus, TransportRating } from '../../types/country';
import { SectionHeader } from '../common/SectionHeader';
import { OfficialLinkButton } from '../common/OfficialLinkButton';

interface TransportTabProps {
  country: Country;
}

/** 운전 가능 여부 배지: 비자 배지와 동일한 색상 언어를 따른다. */
const DRIVING_BADGE: Record<DrivingStatus, { color: string; icon: string }> = {
  '운전 가능': { color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'check-circle' },
  '조건부 가능': { color: 'bg-amber-50 text-amber-600 border-amber-200', icon: 'shield-warning' },
  '별도 절차 필요': { color: 'bg-rose-50 text-rose-700 border-rose-200', icon: 'x-circle' },
};

/** 교통수단 추천도 배지: 현지 꿀팁 탭의 카테고리 배지와 동일한 톤. */
const RATING_META: Record<TransportRating, { border: string; bg: string; text: string }> = {
  '강력추천': { border: 'border-l-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  '추천': { border: 'border-l-brand-500', bg: 'bg-brand-50', text: 'text-brand-600' },
  '상황별': { border: 'border-l-amber-400', bg: 'bg-amber-50', text: 'text-amber-600' },
  '주의': { border: 'border-l-rose-400', bg: 'bg-rose-50', text: 'text-rose-600' },
};

interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex gap-3 items-start">
      <div className="p-1.5 bg-slate-50 rounded-lg text-slate-500 shrink-0">
        <i className={`ph ph-${icon} text-base`} />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500">{label}</p>
        <p className="text-sm text-slate-700 mt-1 leading-relaxed font-medium">{value}</p>
      </div>
    </div>
  );
}

/** 교통·운전 탭: 국제운전면허(IDP) 규정 + 현지 교통수단 가성비 + 공식 출처 */
export function TransportTab({ country }: TransportTabProps) {
  const { transport } = country;
  const { driving } = transport;
  const badge = DRIVING_BADGE[driving.status];

  return (
    <div className="space-y-4 animate-fade-in">
      {/* 운전(국제운전면허) 카드 */}
      <SectionHeader title="국제운전면허(IDP)로 운전이 되나요?" icon="steering-wheel" />

      <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-soft border border-slate-100 space-y-5">
        <div className="flex justify-between items-center gap-3 pb-4 border-b border-slate-100">
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">
              한국 면허·국제운전면허 통용 여부
            </p>
            <p className="text-base lg:text-lg font-extrabold text-slate-800">{country.name}에서 운전하기</p>
          </div>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border shrink-0 ${badge.color}`}>
            <i className={`ph ph-${badge.icon} text-sm`} />
            {driving.status}
          </div>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          <InfoItem icon="scales" label="인정 근거" value={driving.convention} />
          <InfoItem icon="file-text" label="필요 서류·조건" value={driving.requirements} />
          <InfoItem icon="warning" label="꼭 알아둘 주의사항" value={driving.note} />
        </div>
      </div>

      {/* 현지 교통 가성비 카드 */}
      <SectionHeader title="뭘 타는 게 이득? 현지 교통 가성비" icon="path" />

      {transport.summary && (
        <div className="bg-brand-50 border border-brand-100 rounded-2xl px-4 py-3 flex gap-2.5 items-start">
          <i className="ph-fill ph-info text-brand-600 text-lg shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed font-medium">{transport.summary}</p>
        </div>
      )}

      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        {transport.modes.map((mode, idx) => {
          const meta = RATING_META[mode.rating];
          return (
            <div
              key={idx}
              className={`bg-white p-4 rounded-2xl shadow-soft border border-slate-100 border-l-4 ${meta.border} flex gap-3.5`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <i className={`ph ph-${mode.icon} text-xl text-slate-600`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="font-extrabold text-slate-800 text-sm">{mode.name}</h4>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${meta.bg} ${meta.text}`}>{mode.rating}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{mode.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 공식 출처 */}
      <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-soft border border-slate-100 space-y-2">
        <div className="flex items-center gap-1.5 mb-1">
          <i className="ph-fill ph-seal-check text-brand-600 text-sm" />
          <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
            공신력 있는 공식 출처
          </p>
        </div>
        {transport.links.map((link, idx) => (
          <OfficialLinkButton
            key={idx}
            href={link.url}
            label={link.name}
            icon="link-simple-horizontal"
            variant={idx === 0 ? 'primary' : 'neutral'}
          />
        ))}
        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed text-center">
          * 운전면허·교통 규정은 <b>외교부 해외안전여행</b>과 <b>해당국 공식 교통·경찰 기관</b>을 출처로 합니다.
          규정은 수시로 바뀌니 출국 전 반드시 원문에서 재확인하세요.
        </p>
      </div>
    </div>
  );
}
