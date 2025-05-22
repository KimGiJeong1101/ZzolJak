const StageAndMob = ({ setRewardInterval, setMobCount }) => {
  const handleStageChange = (e) => {
    const value = Number(e.target.value);
    setRewardInterval(value); // 여기서 바로 부모 상태 바꿈
  };

  const handleMobCountChange = (e) => {
    const value = Number(e.target.value);
    setMobCount(value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <label className="block mb-4">
        <span className="block mb-1 font-semibold">영지 선택:</span>
        <select
          onChange={handleStageChange}
          className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">쫄작 수:</span>
        <select
          onChange={handleMobCountChange}
          className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
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
