import { useState } from "react";
import Jug from "./Jug";

const Filler = () => {
  const [fillingPercentage, setFillingPercentage] = useState(0);
  const fillTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev === 0) return 1;

      const change = prev + prev * 0.4;
      if (change > 100) return 100;
      return change;
    });
  };
  const emptyTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev < 1) return 0;
      return prev - prev * 0.2;
    });
  };
  return (
    <>
      <Jug fillBy={fillingPercentage} />
      <div className="my-1">
        <button
          className="w-[50px] h-[50px]  bg-green-950 rounded-full mx-1 text-white font-bold cursor-pointer"
          onClick={fillTheJug}
        >
          <span className="p-1">UP</span>
        </button>
        <button
          className="w-[50px] h-[50px]  bg-red-900 rounded-full mx-1 text-white font-bold cursor-pointer"
          onClick={emptyTheJug}
        >
          <span className="p-1">DOWN</span>
        </button>
      </div>
    </>
  );
};

export default Filler;
