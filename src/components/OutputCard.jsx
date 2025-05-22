import { useEffect, useRef } from "react";

const animateValue = (inputEl, newValue) => {
  const duration = 500;
  const frameRate = 30;
  const totalFrames = duration / frameRate;
  let currentFrame = 0;

  const startValue = Number(inputEl.value) || 0;
  const valueDiff = newValue - startValue;

  if (valueDiff === 0) return;

  clearInterval(inputEl._animateTimer);

  inputEl._animateTimer = setInterval(() => {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    const eased = progress < 1 ? Math.pow(progress, 0.6) : 1;
    const displayValue = Math.round(startValue + valueDiff * eased);
    inputEl.value = displayValue;

    if (currentFrame >= totalFrames) {
      clearInterval(inputEl._animateTimer);
      inputEl.value = newValue;
    }
  }, frameRate);

  inputEl.classList.remove("animate");
  void inputEl.offsetWidth;
  inputEl.classList.add("animate");
};

const updateProfitStyle = (input, value) => {
  input.classList.remove("text-green-400", "text-red-400", "text-gray-300");

  if (value > 0) input.classList.add("text-green-400", "font-bold");
  else if (value < 0) input.classList.add("text-red-400", "font-bold");
  else input.classList.add("text-gray-300");
};

const OutputCard = ({ results }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!Array.isArray(results)) return;

    results.forEach((val, i) => {
      const el = inputRefs.current[i];
      if (!el) return;
      animateValue(el, val);
    });

    updateProfitStyle(inputRefs.current[6], results[6]);
  }, [results]);

  const labels = [
    "📦 총 상자 구매 횟수",
    "💸 상자 구매 총 루비 소모",
    "🗝️ 획득한 총 열쇠 수",
    "⚔️ 가능한 던전 플레이 횟수",
    "🎯 보상 받을 수 있는 횟수",
    "💎 예상 총 루비 획득량",
    "📉 루비 순이익 (±)",
  ];

  return (
    <div className="rounded-2xl p-5 border-2 border-purple-400 bg-[#3a3d60] shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-purple-300">
        📊 계산 결과
      </h2>

      {labels.map((label, i) => (
        <div key={i} className="mb-4 flex flex-col">
          <label className="mb-1 text-sm font-medium text-white">{label}</label>
          <input
            type="number"
            readOnly
            ref={(el) => (inputRefs.current[i] = el)}
            defaultValue=""
            className={`px-3 py-2 rounded-lg bg-[#2e3058] text-white border border-gray-600 font-mono text-base`}
          />
        </div>
      ))}
    </div>
  );
};

export default OutputCard;
