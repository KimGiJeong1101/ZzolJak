const useRubyCalculator = ({ buy50, buy80, rewardInterval, mobCount }) => {
  const keyPerBox = 60;
  const keyPerDungeon = 6;

  const totalBox = Number(buy50) + Number(buy80);
const totalUsedRuby = Number(buy50) * 50 + Number(buy80) * 80;
const totalKeys = totalBox * keyPerBox;
  const totalDungeons = Math.floor(totalKeys / keyPerDungeon);
  const rubyRewardCount =
    rewardInterval > 0 ? Math.floor(totalDungeons / rewardInterval) : 0;
  const totalRubyReward = rubyRewardCount * mobCount;
  const rubyProfit = totalRubyReward - totalUsedRuby;

  return {
    totalBox,
    totalUsedRuby,
    totalKeys,
    totalDungeons,
    rubyRewardCount,
    totalRubyReward,
    rubyProfit,
  };
};

export default useRubyCalculator;
