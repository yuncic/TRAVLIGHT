import { useEffect, useState } from 'react';

/**
 * 히어로 이미지의 로딩/에러 상태를 관리한다.
 * 국가가 바뀌면 상태를 초기화해 스켈레톤·폴백을 다시 태운다.
 */
export function useImageStatus(countryId: string) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
  }, [countryId]);

  return {
    imgLoaded,
    imgError,
    onLoad: () => setImgLoaded(true),
    onError: () => setImgError(true),
  };
}
