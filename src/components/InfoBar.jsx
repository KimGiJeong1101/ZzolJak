import "../styles/commonstyle.css";

const InfoBar = () => {
  return (
    <div className="text-sm bg-[#4a5a8a] px-4 py-3 rounded-xl max-w-md mx-auto shadow-md shadow-black/30 font-[Jua] text-[#fefefe] text-center animate-fade-in animate-bounce-in">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        🔑 열쇠상자 1개
        <span className="text-lg text-yellow-200">→</span>
        <strong className="text-pink-200">60개 열쇠</strong>
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap mt-1">
        ⚔️ 던전 1회
        <span className="text-lg text-yellow-200">→</span>
        <strong className="text-pink-200">6개 열쇠 소모</strong>
      </div>
    </div>
  );
};

export default InfoBar;
