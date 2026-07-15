import { useEffect, useMemo, useState } from 'react';
import type { Country } from '../types/country';

/** usePacking이 반환하는 패킹 상태·파생값 묶음 타입 (컴포넌트 props 전달용) */
export type UsePackingReturn = ReturnType<typeof usePacking>;

/**
 * 날씨·패킹 탭의 상태(지역·월·체크리스트)와 파생값(현재 기후 기간, 진행률)을 관리한다.
 * - 국가가 바뀌면 지역을 첫 지역으로 리셋
 * - 월/지역/국가가 바뀌면 체크리스트를 리셋
 */
export function usePacking(country: Country) {
  const [selectedRegionId, setSelectedRegionId] = useState(country.regions[0]?.id ?? '');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (country.regions.length > 0) setSelectedRegionId(country.regions[0].id);
  }, [country]);

  useEffect(() => {
    setCheckedItems({});
  }, [selectedMonth, selectedRegionId, country.id]);

  const currentClimatePeriod = useMemo(() => {
    const regionClimate = country.climate[selectedRegionId] ?? Object.values(country.climate)[0];
    return (
      regionClimate.periods.find((p) => p.months.includes(selectedMonth)) ?? regionClimate.periods[0]
    );
  }, [country, selectedRegionId, selectedMonth]);

  const items = currentClimatePeriod.items;
  const packedCount = items.filter((i) => checkedItems[i]).length;
  const totalCount = items.length;
  const allPacked = totalCount > 0 && packedCount === totalCount;

  const handleCheck = (item: string) =>
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));

  const toggleAllPacked = () => {
    if (allPacked) {
      setCheckedItems({});
      return;
    }
    const next: Record<string, boolean> = {};
    items.forEach((i) => {
      next[i] = true;
    });
    setCheckedItems(next);
  };

  return {
    selectedRegionId,
    setSelectedRegionId,
    selectedMonth,
    setSelectedMonth,
    checkedItems,
    handleCheck,
    toggleAllPacked,
    currentClimatePeriod,
    activePeriodMonths: currentClimatePeriod.months,
    packedCount,
    totalCount,
    allPacked,
  };
}
