/** 하단 고지 문구 */
export function Footer() {
  return (
    <footer className="mt-auto bg-slate-100 py-6 px-4 text-center border-t border-slate-200/50">
      <p className="text-[10px] text-slate-400 leading-relaxed">
        본 프로그램은 프론트엔드 실사용 프로토타입 데모 웹앱입니다.
        <br />
        각 국가의 기상 및 도시별 기후, 안전 규정 정보는 주기적으로 달라지므로,
        <br />
        최종 출국 직전 외교부 해외안전여행 및 해당 목적지 공식 고시를 준수해 주세요.
      </p>
    </footer>
  );
}
