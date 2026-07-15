import { useMemo, useState } from 'react';
import { COUNTRIES } from '../data/countries';
import type { ContinentFilterId } from '../types/country';

/**
 * 국가 선택 모달의 검색어·대륙 필터 상태와, 이를 적용한 국가 목록(파생값)을 관리한다.
 */
export function useCountryFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeContinent, setActiveContinent] = useState<ContinentFilterId>('all');

  const filteredCountries = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return COUNTRIES.filter((c) => {
      const matchesSearch = c.name.includes(searchQuery) || c.englishName.toLowerCase().includes(q);
      const matchesContinent = activeContinent === 'all' || c.continent === activeContinent;
      return matchesSearch && matchesContinent;
    });
  }, [searchQuery, activeContinent]);

  const reset = () => {
    setSearchQuery('');
    setActiveContinent('all');
  };

  return { searchQuery, setSearchQuery, activeContinent, setActiveContinent, filteredCountries, reset };
}
