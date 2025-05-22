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
    <div className="min-h-screen bg-[#2f3158] text-[#f0f0ff] px-4 py-6 font-[Gowun_Dodum,sans-serif]">
      <h1 className="text-center text-2xl sm:text-3xl mb-4 font-bold text-[#fafcfe] drop-shadow-md flex items-center justify-center gap-2">
        <img src={rubyImg} alt="루비" className="w-8 h-8" />
        던전 루비 계산기
        <img src={rubyImg} alt="루비" className="w-8 h-8" />
      </h1>

      <InfoBar />
      <StageAndMob
        setRewardInterval={setRewardInterval}
        setMobCount={setMobCount}
      />

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
        />
      </div>

      <Notice />
    </div>
  );
};

export default App;
