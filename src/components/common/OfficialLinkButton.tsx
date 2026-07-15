type LinkVariant = 'primary' | 'neutral';

interface OfficialLinkButtonProps {
  href: string;
  label: string;
  /** 선행 Phosphor 아이콘명 (ph-*) */
  icon: string;
  variant?: LinkVariant;
}

const VARIANT_CLASS: Record<LinkVariant, string> = {
  primary: 'bg-brand-50 border-brand-100 hover:bg-brand-100 text-brand-600',
  neutral: 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700',
};

const LEADING_ICON_CLASS: Record<LinkVariant, string> = {
  primary: 'text-brand-600',
  neutral: 'text-brand-600',
};

const TRAILING_ICON_CLASS: Record<LinkVariant, string> = {
  primary: '',
  neutral: 'text-slate-400',
};

/**
 * 외부 공식 출처(정부·항공사)로 연결되는 링크 버튼.
 * 새 탭에서 열리며, 여러 탭에서 반복되는 링크 UI를 하나로 통일한다.
 */
export function OfficialLinkButton({ href, label, icon, variant = 'neutral' }: OfficialLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring w-full inline-flex items-center justify-between gap-2 px-4 py-3 border rounded-xl text-xs lg:text-sm font-bold transition-all ${VARIANT_CLASS[variant]}`}
    >
      <div className="flex items-center gap-2">
        <i className={`ph ph-${icon} text-lg shrink-0 ${LEADING_ICON_CLASS[variant]}`} />
        <span className="text-left">{label}</span>
      </div>
      <i className={`ph ph-arrow-square-out text-base shrink-0 ${TRAILING_ICON_CLASS[variant]}`} />
    </a>
  );
}
