import { useState } from 'react';
import { TABS, type TabId } from './constants/tabs';
import { useCountrySelection } from './hooks/useCountrySelection';
import { usePacking } from './hooks/usePacking';
import { useDisclosure } from './hooks/useDisclosure';
import { Header } from './components/layout/Header';
import { CountryChips } from './components/common/CountryChips';
import { HeroImage } from './components/layout/HeroImage';
import { TabBar } from './components/layout/TabBar';
import { Footer } from './components/layout/Footer';
import { VisaTab } from './components/tabs/VisaTab';
import { ProhibitedTab } from './components/tabs/ProhibitedTab';
import { AirlineTab } from './components/tabs/AirlineTab';
import { PackingTab } from './components/tabs/PackingTab';
import { TipsTab } from './components/tabs/TipsTab';
import { CountrySelectorModal } from './components/modal/CountrySelectorModal';

/**
 * 앱의 조립(composition) 지점.
 * 상태는 각 훅에 위임하고, App은 데이터 흐름을 컴포넌트에 연결하는 역할만 한다.
 */
export default function App() {
  const { selectedCountryId, setSelectedCountryId, country } = useCountrySelection();
  const [activeTab, setActiveTab] = useState<TabId>('visa');
  const packing = usePacking(country);
  const selector = useDisclosure();

  return (
    <div className="max-w-md lg:max-w-6xl mx-auto bg-white min-h-screen shadow-2xl relative pb-20 lg:pb-0 flex flex-col">
      <Header
        country={country}
        selectedCountryId={selectedCountryId}
        onSelectCountry={setSelectedCountryId}
        onOpenSelector={selector.open}
      />

      {/* 모바일 전용 퀵픽 칩 상단바 */}
      <CountryChips
        selectedCountryId={selectedCountryId}
        onSelect={setSelectedCountryId}
        className="flex lg:hidden gap-2 overflow-x-auto no-scrollbar px-4 py-2.5 bg-white border-b border-slate-100"
      />

      <HeroImage country={country} />

      <TabBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <main className="flex-1 p-5 lg:px-10 lg:py-8 bg-slate-50/70">
        {activeTab === 'visa' && <VisaTab country={country} />}
        {activeTab === 'prohibited' && <ProhibitedTab country={country} />}
        {activeTab === 'airline' && <AirlineTab country={country} />}
        {activeTab === 'packing' && <PackingTab country={country} packing={packing} />}
        {activeTab === 'tips' && <TipsTab country={country} />}
      </main>

      <Footer />

      {selector.isOpen && (
        <CountrySelectorModal
          selectedCountryId={selectedCountryId}
          onSelectCountry={setSelectedCountryId}
          onClose={selector.close}
        />
      )}
    </div>
  );
}
