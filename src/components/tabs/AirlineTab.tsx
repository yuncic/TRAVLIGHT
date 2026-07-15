import type { Airline, Country } from '../../types/country';
import { COMMON_AIR_RULES, DOMESTIC_AIRLINES } from '../../data/airlines';
import { SectionHeader } from '../common/SectionHeader';
import { OfficialLinkButton } from '../common/OfficialLinkButton';

interface AirlineTabProps {
  country: Country;
}

interface AirlineLinkGroupProps {
  title: string;
  leadingNode: React.ReactNode;
  airlines: Airline[];
  linkIcon: string;
}

/** 항공사 공식 규정 링크 묶음(국내/외항사 공용) */
function AirlineLinkGroup({ title, leadingNode, airlines, linkIcon }: AirlineLinkGroupProps) {
  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-slate-100">
      <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2.5">
        {leadingNode}
        <h4 className="text-sm font-extrabold text-slate-700">{title}</h4>
      </div>
      <div className="grid gap-2 lg:grid-cols-2">
        {airlines.map((air) => (
          <OfficialLinkButton key={air.url} href={air.url} label={air.name} icon={linkIcon} variant="neutral" />
        ))}
      </div>
    </div>
  );
}

/** 항공사 규정 탭: 공통 위험물 규정 + 국내/외항사 공식 규정 링크 */
export function AirlineTab({ country }: AirlineTabProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <SectionHeader title="항공사별 반입·수하물 규정" icon="airplane-in-flight" />

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 shadow-sm">
        <div className="text-amber-600 mt-0.5 shrink-0">
          <i className="ph-fill ph-battery-warning text-xl" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-amber-800 mb-0.5">2025~2026 보조배터리 규정 강화</p>
          <p className="text-xs text-amber-700 leading-relaxed font-medium">
            국내외 항공사 대부분이 <b>비행 중 보조배터리 사용·충전을 금지</b>하고, 머리 위 선반(Overhead Bin) 보관도
            막고 있습니다. 반드시 몸에 지니거나 좌석 앞주머니에 보관하세요. 세부 용량·개수는 항공사마다 다르니 공식 링크를
            확인하세요.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <i className="ph-fill ph-shield-check text-brand-500 text-base" />
          <h4 className="text-sm font-extrabold text-slate-700">전 항공사 공통 기본 규정 (ICAO·IATA 기준)</h4>
        </div>
        <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
          {COMMON_AIR_RULES.map((rule) => (
            <div key={rule.title} className="bg-white p-4 lg:p-5 rounded-2xl shadow-soft border border-slate-100">
              <div className="flex items-center gap-2 mb-3 text-slate-800 font-extrabold text-sm border-b border-slate-100 pb-2.5">
                <i className={`ph ph-${rule.icon} text-lg text-brand-500`} /> {rule.title}
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 shrink-0 mt-0.5">
                    기내
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">{rule.cabin}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0 mt-0.5">
                    위탁
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">{rule.checked}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AirlineLinkGroup
        title="국내 주요 항공사 공식 규정"
        leadingNode={<i className="ph-fill ph-airplane text-brand-600 text-base" />}
        airlines={DOMESTIC_AIRLINES}
        linkIcon="airplane-tilt"
      />

      {country.foreignAirlines.length > 0 && (
        <AirlineLinkGroup
          title={`${country.name} 취항 대표 외항사 공식 규정`}
          leadingNode={<span className="text-base">{country.flag}</span>}
          airlines={country.foreignAirlines}
          linkIcon="globe-hemisphere-west"
        />
      )}

      <p className="text-[10px] text-slate-400 text-center mt-2 leading-relaxed">
        * 항공사별 세부 규정(액체 지퍼백 규격, 배터리 용량·개수 등)은 예고 없이 바뀔 수 있으니 탑승 전 각 항공사 공식
        안내를 반드시 확인하세요.
      </p>
    </div>
  );
}
