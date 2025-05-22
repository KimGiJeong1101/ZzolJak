const InfoBar = () => {
  return (
    <div className="text-center text-sm text-gray-300 bg-[#2e2f5a] px-4 py-3 rounded-xl max-w-md mx-auto shadow-md">
      🔑 열쇠상자 1개 → <strong className="text-purple-300">60개 열쇠</strong>
      <br />
      ⚔️ 던전 1회 → <strong className="text-purple-300">6개 열쇠 소모</strong>
    </div>
  );
};

export default InfoBar;
