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
    <div className="max-w-xs mx-auto p-4 bg-gradient-to-br from-pink-50 to-blue-100 rounded-xl shadow-md border border-purple-200 animate-fade-in transition-all duration-500 hover:shadow-xl hover:scale-105">
      <label className="block mb-4">
        <span className="block mb-1 text-xs font-semibold text-purple-700">
          🌿 영지 선택:
        </span>
        <select
          onChange={handleStageChange}
          className="w-full bg-white text-xs text-purple-800 border border-purple-300 rounded-lg px-2 py-1 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-500 transition-all duration-300 ease-in-out"
        >
          <option value="0">-- 선택 --</option>
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

      <label className="block">
        <span className="block mb-1 text-xs font-semibold text-purple-700">
          👾 쫄작 수:
        </span>
        <select
          onChange={handleMobCountChange}
          className="w-full bg-white text-xs text-purple-800 border border-purple-300 rounded-lg px-2 py-1 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-500 transition-all duration-300 ease-in-out"
        >
          <option value="0">-- 선택 --</option>
          <option value="20">1쫄작</option>
          <option value="40">2쫄작</option>
          <option value="60">3쫄작</option>
          <option value="80">4쫄작</option>
        </select>
      </label>
    </div>
  );
};

export default StageAndMob;
