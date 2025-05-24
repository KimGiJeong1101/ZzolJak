const useRubyCalculator = ({ buy50, buy80, rewardInterval, mobCount }) => {
  const keyPerBox = 60; // 인게임 내에서 상자당 열쇠 개수가 바뀌면 이 부분을 수정해야 함
  const keyPerDungeon = 6; // 이 값도 던전 1회당 소모되는 열쇠 개수가 바뀌면 수정해야 함

  const totalBox = Number(buy50) + Number(buy80); // 50루비 상자 + 80루비 상자, 총 구매한 상자 개수 계산
  const totalUsedRuby = Number(buy50) * 50 + Number(buy80) * 80; // 각 상자 가격과 구매 수량을 곱해서 총 사용한 루비 계산
  const totalKeys = totalBox * keyPerBox; // 상자 개수에 열쇠 수를 곱해서 총 열쇠 개수 계산
  const totalDungeons = Math.floor(totalKeys / keyPerDungeon); // 총 열쇠로 던전을 몇 번 돌 수 있는지 계산
  const rubyRewardCount =
    rewardInterval > 0 ? Math.floor(totalDungeons / rewardInterval) : 0; // rewardInterval은 루비 보상을 받기 위한 던전 플레이 수이며, 이 값으로 총 보상 횟수 계산
  const totalRubyReward = rubyRewardCount * mobCount; // 보상 횟수에 쫄병 수를 곱해 총 루비 보상 개수 계산
  const rubyProfit = totalRubyReward - totalUsedRuby; // 총 루비 보상 - 사용한 루비 = 최종 수익 (득인지 실인지 판단)

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
