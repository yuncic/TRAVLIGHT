import type { Country } from '../../types/country';
import { SectionHeader } from '../common/SectionHeader';
import { VisaBadge } from '../common/VisaBadge';
import { OfficialLinkButton } from '../common/OfficialLinkButton';

interface VisaTabProps {
  country: Country;
}

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

/** 비자·서류 탭: 입국 자격 요건 + 공신력 있는 공식 출처 링크 */
export function VisaTab({ country }: VisaTabProps) {
  const { visa } = country;

  return (
    <div className="space-y-4 animate-fade-in">
      <SectionHeader title="입국 자격 및 비자 요건" icon="airplane-tilt" />

      <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-soft border border-slate-100 space-y-5">
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">
              한눈에 보는 비자 필요여부
            </p>
            <p className="text-base lg:text-lg font-extrabold text-slate-800">{country.name} 입국 조건</p>
          </div>
          <VisaBadge status={visa.status} />
        </div>

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          <InfoItem icon="calendar-check" label="최대 체류 예정일" value={visa.duration} />
          <InfoItem icon="file-text" label="필요한 입국 서류 및 준비물" value={visa.requirements} />
          <InfoItem icon="shield-check" label="여권 필수 규정 조건" value={visa.passport} />
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-1.5 mb-1">
            <i className="ph-fill ph-seal-check text-brand-600 text-sm" />
            <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
              공신력 있는 공식 출처
            </p>
          </div>
          {visa.mofaLink && (
            <OfficialLinkButton
              href={visa.mofaLink}
              label={`외교부 해외안전여행 · ${country.name} 안전정보`}
              icon="shield-check"
              variant="neutral"
            />
          )}
          {visa.officialLink && (
            <OfficialLinkButton
              href={visa.officialLink}
              label={visa.linkText}
              icon="link-simple-horizontal"
              variant="primary"
            />
          )}
          <p className="text-[10px] text-slate-400 mt-1 leading-relaxed text-center">
            * 위 체류일·서류·여권 규정은 <b>외교부 해외안전여행</b>과 <b>해당국 공식 정부 포털</b>을 출처로 합니다.
            규정은 수시로 바뀌니 출국 전 반드시 원문에서 재확인하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
