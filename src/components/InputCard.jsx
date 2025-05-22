import { useLayoutEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import InputCardStyles from "../styles/InputCardStyles";

const InputCard = ({
  buy50,
  buy80,
  rewardInterval,
  mobCount,
  setBuy50,
  setBuy80,
  setRewardInterval,
  setMobCount,
  chartRef,
  usedRuby,
  expectedReward,
}) => {
  const canvasRef = useRef(null);

  // 에러 메시지 상태
  const [error50, setError50] = useState("");
  const [error80, setError80] = useState("");

  // 입력 제한 로직
  const handleBuy50Change = (e) => {
    let val = e.target.value;
    if (val === "") {
      setBuy50(""); // 빈 값 허용
      setError50("");
      return;
    }
    const num = Math.min(Number(val), 20);
    setBuy50(num);
    setError50(num < Number(val) ? "⚠️ 최대 20으로 자동 조정되었습니다." : "");
  };

  const handleBuy80Change = (e) => {
    let val = e.target.value;
    if (val === "") {
      setBuy80(""); // 빈 값 허용
      setError80("");
      return;
    }
    const num = Math.min(Number(val), 50);
    setBuy80(num);
    setError80(num < Number(val) ? "⚠️ 최대 50으로 자동 조정되었습니다." : "");
  };

  useLayoutEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [usedRuby, expectedReward];
      chartRef.current.update();
    } else {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["루비 사용량", "획득 루비"],
          datasets: [
            {
              label: "수치",
              data: [usedRuby, expectedReward],
              backgroundColor: ["#b388eb", "#66ff99"],
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
              ticks: { stepSize: 10, color: "#ffffff" },
            },
            y: {
              ticks: { color: "#ffffff" },
            },
          },
          plugins: {
            legend: { display: false },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [usedRuby, expectedReward]);

  return (
    <div className={InputCardStyles.container}>
      <h2 className={InputCardStyles.title}>📝 입력값</h2>

      <div className={InputCardStyles.inputGroup}>
        <label className={InputCardStyles.label}>
          💰 50루비 상자 구매 횟수 (최대 20회)
        </label>
        <input
          type="number"
          value={buy50}
          onChange={handleBuy50Change}
          className={InputCardStyles.input}
        />
        {error50 && <p className={InputCardStyles.errorText}>{error50}</p>}
      </div>

      <div className={InputCardStyles.inputGroup}>
        <label className={InputCardStyles.label}>
          💰 80루비 상자 구매 횟수 (최대 50회)
        </label>
        <input
          type="number"
          value={buy80}
          onChange={handleBuy80Change}
          className={InputCardStyles.input}
        />
        {error80 && <p className={InputCardStyles.errorText}>{error80}</p>}
      </div>

      <div className={InputCardStyles.inputGroup}>
        <label className={InputCardStyles.label}>🧭 만렙까지 도는 횟수</label>
        <input
          type="number"
          readOnly
          value={rewardInterval}
          onChange={(e) => setRewardInterval(Number(e.target.value))}
          className={InputCardStyles.input}
        />
      </div>

      <div className={InputCardStyles.inputGroup}>
        <label className={InputCardStyles.label}>🧟‍♂️ 쫄몹당 루비 획득량</label>
        <input
          type="number"
          readOnly
          value={mobCount}
          onChange={(e) => setMobCount(Number(e.target.value))}
          className={InputCardStyles.input}
        />
      </div>

      <canvas ref={canvasRef} width="400" height="200" className={InputCardStyles.canvas} />
    </div>
  );
};

export default InputCard;
