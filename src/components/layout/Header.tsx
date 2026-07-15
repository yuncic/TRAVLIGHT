import type { Country } from '../../types/country';
import { CountryChips } from '../common/CountryChips';

interface HeaderProps {
  country: Country;
  selectedCountryId: string;
  onSelectCountry: (id: string) => void;
  onOpenSelector: () => void;
}

/** 상단 고정 헤더: 로고 · (데스크탑) 국가 퀵픽 칩 · 국가 변경 버튼 */
export function Header({ country, selectedCountryId, onSelectCountry, onOpenSelector }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-14 lg:h-16 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="text-xl lg:text-2xl font-black text-brand-500 tracking-wider">TRAVLIGHT</span>
        <CountryChips
          selectedCountryId={selectedCountryId}
          onSelect={onSelectCountry}
          className="hidden lg:flex gap-2"
        />
      </div>
      <button
        onClick={onOpenSelector}
        aria-label="여행 국가 변경"
        className="focus-ring flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-2xl transition-all shadow-sm active:scale-95"
      >
        <span className="text-base">{country.flag}</span>
        <span className="text-sm font-bold text-slate-700">{country.name}</span>
        <i className="ph ph-caret-down text-slate-400 text-xs" />
      </button>
    </header>
  );
}
