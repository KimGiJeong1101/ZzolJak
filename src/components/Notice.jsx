import "../styles/commonstyle.css";

const Notice = () => {
  return (
    <div className="mt-6 px-4 py-3 text-sm bg-purple-100 border border-purple-400 text-indigo-900 rounded-lg text-center shadow-md animate-fade-in font-[Jua] hover:animate-wiggle">
      ℹ️{" "}
      <span className="ml-1">
        계산 과정에서 소수점은 반올림되므로 실제 결과와 약간 다를 수 있습니다.
      </span>
    </div>
  );
};

export default Notice;
