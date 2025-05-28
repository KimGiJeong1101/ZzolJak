import { useState } from "react";
import "../styles/commonstyle.css";
import { motion, AnimatePresence } from "framer-motion";

const StageAndMob = ({ setDungeonExp, setMobCount }) => {
  const [activeType, setActiveType] = useState(null);

  const handleSelectType = (type) => {
    setActiveType(type);
    setSelectedStage(""); // 초기화
    setSelectedMobCount(""); // 초기화
    setDungeonExp(0); // 부모 상태도 초기화하고 싶다면
    setMobCount(0); // 여기도 초기화
  };

  const [normalStage, setNormalStage] = useState("");
  const [normalMobCount, setNormalMobCount] = useState("");

  const [nightmareStage, setNightmareStage] = useState("");
  const [nightmareMobCount, setNightmareMobCount] = useState("");

  // 노말 난이도
  const normalStages = [
    { id: 1, label: "1 영지", exp: 760 },
    { id: 2, label: "2 영지", exp: 940 },
    { id: 3, label: "3 영지", exp: 940 },
    { id: 4, label: "4 영지", exp: 940 },
    { id: 5, label: "5 영지", exp: 940 },
    { id: 6, label: "6 영지", exp: 940 },
    { id: 7, label: "7 영지", exp: 940 },
    { id: 8, label: "8 영지", exp: 970 },
    { id: 9, label: "9 영지", exp: 1000 },
    { id: 10, label: "10 영지", exp: 1030 },
    { id: 11, label: "11 영지", exp: 1060 },
    { id: 12, label: "12 영지", exp: 1090 },
    { id: 13, label: "13 영지", exp: 1120 },
    { id: 14, label: "14 영지", exp: 1150 },
  ];

  const normalMobs = [
    { label: "1쫄작", value: 20 },
    { label: "2쫄작", value: 40 },
    { label: "3쫄작", value: 60 },
    { label: "4쫄작", value: 80 },
  ];

  // 악몽 난이도

  const nightmareStages = [
    { id: 1, label: "1 영지", exp: 10 },
    { id: 2, label: "2 영지", exp: 10 },
    { id: 3, label: "3 영지", exp: 10 },
    { id: 4, label: "4 영지", exp: 10 },
    { id: 5, label: "5 영지", exp: 10 },
    { id: 6, label: "6 영지", exp: 10 },
    { id: 7, label: "7 영지", exp: 10 },
    { id: 8, label: "8 영지", exp: 10 },
    { id: 9, label: "9 영지", exp: 10 },
    { id: 10, label: "10 영지", exp: 400 },
    { id: 11, label: "11 영지", exp: 400 },
    { id: 12, label: "12 영지", exp: 400 },
    { id: 13, label: "13 영지", exp: 400 },
    { id: 14, label: "14 영지", exp: 400 },
  ];

  const nightmareMobs = [
    { label: "1쫄작", value: 20 },
    { label: "2쫄작", value: 40 },
    { label: "3쫄작", value: 60 },
    { label: "4쫄작", value: 80 },
    { label: "5쫄작", value: 100 },
    { label: "6쫄작", value: 120 },
    { label: "7쫄작", value: 140 },
    { label: "8쫄작", value: 160 },
  ];

  const handleNormalStageChange = (e) => {
    const selectedId = Number(e.target.value);
    const selected = normalStages.find((stage) => stage.id === selectedId);
    if (selected) {
      setNormalStage(selectedId);
      setDungeonExp(selected.exp);
    }
  };

  const handleNightmareStageChange = (e) => {
    const selectedId = Number(e.target.value);
    const selected = nightmareStages.find((stage) => stage.id === selectedId);
    if (selected) {
      setNightmareStage(selectedId);
      setDungeonExp(selected.exp);
    }
  };

  const handleNormalMobCountChange = (e) => {
    const value = Number(e.target.value);
    setNormalMobCount(value);
    setMobCount(value);
  };

  const handleNightmareMobCountChange = (e) => {
    const value = Number(e.target.value);
    setNightmareMobCount(value);
    setMobCount(value);
  };

  const NormalUI = () => (
    <div className="mt-6 space-y-4">
      <label className="flex items-center space-x-2">
        <span className="text-sm min-w-[85px]"> 🌿영지 선택 :</span>
        <select
          value={normalStage}
          onChange={handleNormalStageChange}
          className="w-full bg-white text-black text-sm border border-cyan-600 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:border-cyan-400 transition"
        >
          <option value="">영지 선택</option>
          {normalStages.map(({ id, label }) => (
            <option value={id} key={id}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center space-x-2">
        <span className="text-sm min-w-[85px]"> 👾쫄작 개수 :</span>
        <select
          value={normalMobCount}
          onChange={handleNormalMobCountChange}
          className="w-full bg-white text-black text-sm border border-cyan-600 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:border-cyan-400 transition"
        >
          <option value="0">쫄작 수</option>
          {normalMobs.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );

  const NightmareUI = () => (
    // 해당 컴포넌트는 나중에 경험치 혹은 쫄작 수 정보를 수급하면 사용예정

    // <div className="mt-6 space-y-4">
    //   <label className="flex items-center space-x-2">
    //     <span className="text-sm min-w-[85px]">🌿 영지 선택 :</span>
    //     <select
    //       value={nightmareStage}
    //       onChange={handleNightmareStageChange}
    //       className="w-full bg-white text-black text-sm border border-purple-500 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 hover:border-purple-400 transition"
    //     >
    //       <option value="0">영지 선택</option>
    //       {nightmareStages.map(({ id, label }) => (
    //         <option value={id} key={id}>
    //           {label}
    //         </option>
    //       ))}
    //     </select>
    //   </label>

    //   <label className="flex items-center space-x-2">
    //     <span className="text-sm min-w-[85px]">👾 쫄작 개수 :</span>
    //     <select
    //       value={nightmareMobCount}
    //       onChange={handleNightmareMobCountChange}
    //       className="w-full bg-white text-black text-sm border border-purple-500 rounded-lg px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 hover:border-purple-400 transition"
    //     >
    //       <option value="0">쫄작 수</option>
    //       {nightmareMobs.map(({ label, value }) => (
    //         <option value={value} key={value}>
    //           {label}
    //         </option>
    //       ))}
    //     </select>
    //   </label>
    // </div>

    <div className="mt-4 p-4 border-2 border-purple-300 rounded-lg bg-purple-50 text-center shadow-inner shadow-purple-100">
      <p className="text-base sm:text-lg font-semibold text-purple-600 mb-1.5">
        ⚠️ 준비 중입니다!
      </p>
      <p className="text-xs sm:text-sm text-gray-700">
        <span className="font-medium">악몽 난이도</span>는{" "}
        <span className="font-bold text-purple-500">추후 업데이트 예정</span>
        입니다.
      </p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-[#F3F4F6] rounded-xl shadow-md shadow-black/20 text-gray-800 font-[Jua] animate-fade-in hover:scale-105 transition-transform duration-300">
      {/* 🔘 버튼 */}
      <div className="flex justify-center gap-4 mb-2">
        <button
          onClick={() => handleSelectType("normal")}
          className={`cursor-pointer px-5 py-2.5 rounded-2xl text-white text-sm sm:text-base transition-all duration-200 shadow-md ${
            activeType === "normal"
              ? "bg-blue-600"
              : "bg-blue-400 hover:bg-blue-600"
          }`}
        >
          보통
        </button>
        <button
          onClick={() => handleSelectType("nightmare")}
          className={`cursor-pointer px-5 py-2.5 rounded-2xl text-white text-sm sm:text-base transition-all duration-200 shadow-md ${
            activeType === "nightmare"
              ? "bg-purple-600"
              : "bg-purple-400 hover:bg-purple-600"
          }`}
        >
          악몽
        </button>
      </div>

      {/* ✨ 조건부 렌더링 */}
      <AnimatePresence mode="wait">
        {activeType === "normal" && (
          <motion.div
            key="normal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <NormalUI />
          </motion.div>
        )}

        {activeType === "nightmare" && (
          <motion.div
            key="nightmare"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <NightmareUI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StageAndMob;
