interface SectionHeaderProps {
  title: string;
  /** Phosphor 아이콘명 (ph-*) */
  icon: string;
}

/** 각 탭 상단의 아이콘 + 제목 헤더 */
export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div className="p-2 bg-brand-50 text-brand-600 rounded-xl">
        <i className={`ph ph-${icon} text-xl`} />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
  );
}
