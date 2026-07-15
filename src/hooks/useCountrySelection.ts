import { useMemo, useState } from 'react';
import { getCountryById } from '../data/countries';

/**
 * 현재 선택된 국가 상태를 관리한다.
 * `country`는 상태가 아니라 id로부터 파생되는 값이므로 useMemo로 계산한다.
 */
export function useCountrySelection(initialId = 'JP') {
  const [selectedCountryId, setSelectedCountryId] = useState(initialId);
  const country = useMemo(() => getCountryById(selectedCountryId), [selectedCountryId]);

  return { selectedCountryId, setSelectedCountryId, country };
}
