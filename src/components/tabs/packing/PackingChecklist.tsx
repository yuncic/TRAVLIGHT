interface PackingChecklistProps {
  items: string[];
  checkedItems: Record<string, boolean>;
  onToggle: (item: string) => void;
}

/** 준비물 체크리스트 (2열 그리드, 체크 시 취소선) */
export function PackingChecklist({ items, checkedItems, onToggle }: PackingChecklistProps) {
  return (
    <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2">
      {items.map((item, idx) => (
        <label
          key={idx}
          className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
        >
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-slate-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
            checked={!!checkedItems[item]}
            onChange={() => onToggle(item)}
          />
          <span
            className={`text-xs font-bold select-none ${
              checkedItems[item] ? 'text-slate-300 line-through' : 'text-slate-600'
            }`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  );
}
