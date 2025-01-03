import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Jug = ({ fillBy }) => {
  const [levelChanged, setLevelChanged] = useState(false);
  useEffect(() => {
    setLevelChanged(true);
    const timeOutId = setTimeout(() => {
      setLevelChanged(false)
    },3000);

    return ()=>{
      clearTimeout(timeOutId)
    }
  }, [fillBy]);
  return (
    <>
      <div className="w-[200px] h-[400px] border-gray-950 border-2 border-t-0 rounded-sm relative overflow-hidden">
        <div
          className={`w-full bg-blue-600 opacity-70 absolute bottom-0 rounded-b-sm rounded-t-sm ${levelChanged && "animate-wave"}`}
          style={{ height: `${fillBy}%` }}
        >
          <span className="text-white font-bold text-xl animate-pulse">
            {Math.round(fillBy)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default Jug;
