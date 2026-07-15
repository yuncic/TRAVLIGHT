import type { Country } from '../../types/country';
import { useImageStatus } from '../../hooks/useImageStatus';

interface HeroImageProps {
  country: Country;
}

/** 국가 대표 이미지 히어로. 스켈레톤 로딩 + 로드 실패 시 국기 폴백. */
export function HeroImage({ country }: HeroImageProps) {
  const { imgLoaded, imgError, onLoad, onError } = useImageStatus(country.id);

  return (
    <div className="relative h-56 lg:h-80 w-full overflow-hidden bg-slate-200">
      {!imgError && (
        <img
          key={country.id}
          src={country.image}
          alt={country.name}
          onLoad={onLoad}
          onError={onError}
          className={`w-full h-full object-cover brightness-95 transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {!imgLoaded && !imgError && <div className="absolute inset-0 animate-pulse bg-slate-200" />}
      {imgError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
          <span className="text-6xl">{country.flag}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />
      <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 text-white pr-5">
        <span className="px-2 py-0.5 lg:px-3 lg:py-1 bg-brand-500/90 text-[10px] lg:text-xs font-bold rounded-lg mb-1.5 lg:mb-2.5 inline-block tracking-wide uppercase">
          Real-time Travel Guide
        </span>
        <h2 className="text-3xl lg:text-5xl font-extrabold flex items-center gap-2 lg:gap-3 tracking-tight">
          {country.name} <span className="text-2xl lg:text-4xl">{country.flag}</span>
        </h2>
        <p className="text-xs lg:text-sm text-slate-200 mt-1 lg:mt-2 font-medium tracking-wide">
          {country.englishName} • {country.continent.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
