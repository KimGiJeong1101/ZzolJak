const StageAndMob = ({ setRewardInterval, setMobCount }) => {
  const handleStageChange = (e) => {
    const value = Number(e.target.value);
    setRewardInterval(value);
  };

  const handleMobCountChange = (e) => {
    const value = Number(e.target.value);
    setMobCount(value);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-[#4a5a8a] rounded-xl shadow-md shadow-black/30 text-white font-[Jua]">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        {/* 영지 선택 */}
        <label className="flex items-center space-x-2 flex-1 w-full">
          <span className="text-sm min-w-[85px] text-whtie">🌿 영지 선택</span>
          <select
            onChange={handleStageChange}
            className="w-full bg-[#f8f9fb] text-black text-sm border border-purple-300 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-500 transition"
          >
            <option value="0">영지 선택</option>
            <option value="17">1 영지</option>
            <option value="16">2 영지</option>
            <option value="16">3 영지</option>
            <option value="15">4 영지</option>
            <option value="15">5 영지</option>
            <option value="14">6 영지</option>
            <option value="14">7 영지</option>
            <option value="13">8 영지</option>
            <option value="13">9 영지</option>
            <option value="13">10 영지</option>
            <option value="12">11 영지</option>
            <option value="12">12 영지</option>
            <option value="12">13 영지</option>
            <option value="11">14 영지</option>
          </select>
        </label>

        {/* 쫄작 수 */}
        <label className="flex items-center space-x-2 flex-1 w-full">
          <span className="text-sm min-w-[85px] text-whtie">👾 쫄작 개수</span>
          <select
            onChange={handleMobCountChange}
            className="w-full bg-[#f8f9fb] text-black text-sm border border-purple-300 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-500 transition"
          >
            <option value="0">쫄작 개수</option>
            <option value="20">1쫄작</option>
            <option value="40">2쫄작</option>
            <option value="60">3쫄작</option>
            <option value="80">4쫄작</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default StageAndMob;
