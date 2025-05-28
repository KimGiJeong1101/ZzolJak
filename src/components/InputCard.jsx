import { useLayoutEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "../styles/commonstyle.css";

const InputCard = ({
  buy50,
  buy80,
  rewardInterval,
  mobCount,
  setBuy50,
  setBuy80,
  chartRef,
  usedRuby,
  expectedReward,
}) => {
  const canvasRef = useRef(null);

  const [error50, setError50] = useState("");
  const [error80, setError80] = useState("");

  const handleBuy50Change = (e) => {
    let val = e.target.value;
    if (val === "") {
      setBuy50("");
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
      setBuy80("");
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
    <div className="rounded-2xl p-5 border-2 border-[#1E3A8A] shadow-lg bg-[#93C5FD] text-[#1E3A8A] font-[Jua] transition-all duration-300 hover:shadow-[0_0_15px_#3B82F6aa] animate-pulse-neon w-full">
      <h2 className="text-lg mb-4 font-semibold">📝 입력값</h2>

      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-medium">
          💰 50루비 상자 구매 횟수 (최대 20회)
        </label>
        <input
          type="number"
          value={buy50}
          onChange={handleBuy50Change}
          className="px-3 py-2 rounded-lg bg-[#E0F2FE] text-[#1E40AF] border border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition"
          min={0}
          max={20}
        />
        {error50 && (
          <p className="text-[#DC2626] text-sm mt-1 font-semibold">{error50}</p>
        )}
      </div>

      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-medium">
          💰 80루비 상자 구매 횟수 (최대 50회)
        </label>
        <input
          type="number"
          value={buy80}
          onChange={handleBuy80Change}
          className="px-3 py-2 rounded-lg bg-[#E0F2FE] text-[#1E40AF] border border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition"
          min={0}
          max={50}
        />
        {error80 && (
          <p className="text-[#DC2626] text-sm mt-1 font-semibold">{error80}</p>
        )}
      </div>

      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-medium">
          🧭 만렙까지 도는 횟수
        </label>
        <input
          type="number"
          readOnly
          value={rewardInterval}
          className="px-3 py-2 rounded-lg bg-[#E0F2FE] text-[#1E40AF] border border-[#3B82F6] cursor-not-allowed"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-medium">
          🧟‍♂️ 쫄몹당 루비 획득량
        </label>
        <input
          type="number"
          readOnly
          value={mobCount}
          className="px-3 py-2 rounded-lg bg-[#E0F2FE] text-[#1E40AF] border border-[#3B82F6] cursor-not-allowed"
        />
      </div>

      <canvas ref={canvasRef} width="400" height="200" className="mt-4" />
    </div>
  );
};

export default InputCard;
