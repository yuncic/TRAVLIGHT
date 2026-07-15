interface VisaBadgeProps {
  status: string;
}

/** 비자 필요 여부를 색상 배지로 표현 */
export function VisaBadge({ status }: VisaBadgeProps) {
  let colorClass = 'bg-slate-100 text-slate-600 border-slate-200';
  let icon = 'info';

  if (status.includes('무비자')) {
    colorClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    icon = 'check-circle';
  } else if (status.includes('전자여행허가') || status.includes('전자비자')) {
    colorClass = 'bg-amber-50 text-amber-600 border-amber-200';
    icon = 'shield-warning';
  } else if (status.includes('비자필요')) {
    colorClass = 'bg-rose-50 text-rose-700 border-rose-200';
    icon = 'x-circle';
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${colorClass}`}>
      <i className={`ph ph-${icon} text-sm`} />
      {status}
    </div>
  );
}
