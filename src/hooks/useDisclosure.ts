import { useCallback, useState } from 'react';

/**
 * 열림/닫힘 상태를 다루는 범용 훅 (모달·드로어 등에 재사용).
 */
export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, open, close, toggle };
}
