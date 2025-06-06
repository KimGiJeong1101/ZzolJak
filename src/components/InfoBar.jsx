import "../styles/commonstyle.css";

const InfoBar = () => {
  return (
    <div className="text-sm bg-[#E0E7FF] px-4 py-3 rounded-xl max-w-md mx-auto shadow-md shadow-black/20 font-[Jua] text-[#1e293b] text-center animate-fade-in animate-bounce-in">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        🔑 열쇠상자 1개
        <span className="text-lg text-yellow-600">→</span>
        <strong className="text-black-100">60개 열쇠</strong>
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap mt-1">
        ⚔️ 던전 1회당<strong>열쇠 소모</strong>
      </div>
      <div className="text-sm text-[#334155]">
        보통: <strong className="text-black">6개</strong> / 악몽:{" "}
        <strong className="text-black">12개</strong>
      </div>
    </div>
  );
};

export default InfoBar;
