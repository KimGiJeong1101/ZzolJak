import { useState, useRef } from "react";
import InfoBar from "./components/InfoBar";
import InputCard from "./components/InputCard";
import OutputCard from "./components/OutputCard";
import Notice from "./components/Notice";
import useRubyCalculator from "./hooks/useRubyCalculator";
import StageAndMob from "./components/StageAndMob";

import rubyImg from "./assets/ruby_img.png";

const App = () => {
  const chartRef = useRef(null);

  const [buy50, setBuy50] = useState("");
  const [buy80, setBuy80] = useState("");
  const [rewardInterval, setRewardInterval] = useState("");
  const [mobCount, setMobCount] = useState("");

  const {
    totalBox,
    totalUsedRuby,
    totalKeys,
    totalDungeons,
    rubyRewardCount,
    totalRubyReward,
    rubyProfit,
  } = useRubyCalculator({
    buy50,
    buy80,
    rewardInterval,
    mobCount,
  });

  return (
    <div className="min-h-screen bg-[#394867] text-[#f0f0ff] px-4 py-6 font-[Gowun_Dodum,sans-serif]">
      <h1 className="text-center text-2xl sm:text-3xl mb-4 font-bold text-[#fafcfe] drop-shadow-md flex items-center justify-center gap-2">
        <img src={rubyImg} alt="루비" className="w-8 h-8" />
        쫄작 루비 계산기
        <img src={rubyImg} alt="루비" className="w-8 h-8" />
      </h1>

      <div className="mb-6">
        <InfoBar />
      </div>
      <StageAndMob
        setRewardInterval={setRewardInterval}
        setMobCount={setMobCount}
      />

      {/* 여기 max-w-6xl 유지하되, 그 안의 자식 컨테이너에 반응형 너비 적용 */}
      <div className="grid gap-6 max-w-6xl mx-auto mt-6 sm:grid-cols-2">
        <InputCard
          buy50={buy50}
          buy80={buy80}
          setBuy50={setBuy50}
          setBuy80={setBuy80}
          rewardInterval={rewardInterval}
          setRewardInterval={setRewardInterval}
          mobCount={mobCount}
          setMobCount={setMobCount}
          chartRef={chartRef}
          usedRuby={totalUsedRuby}
          expectedReward={totalRubyReward}
          // 여기 각 카드에 w-full max-w-md sm:max-w-none 추가
          className="w-full max-w-md sm:max-w-none"
        />

        <OutputCard
          results={[
            totalBox,
            totalUsedRuby,
            totalKeys,
            totalDungeons,
            rubyRewardCount,
            totalRubyReward,
            rubyProfit,
          ]}
          className="w-full max-w-md sm:max-w-none"
        />
      </div>

      <Notice />
    </div>
  );
};

export default App;
