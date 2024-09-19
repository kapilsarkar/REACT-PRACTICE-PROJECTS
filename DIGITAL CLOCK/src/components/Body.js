import { useState } from "react";

const Body = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);

  const update = () => {
    const curUpdateTime = new Date().toLocaleTimeString();
    setTime(curUpdateTime);
  };

  setInterval(() => {
    update();
  }, 1000);

  return (
    <div className="body">
      <h1 className="clock-display">{time}</h1>
    </div>
  );
};

export default Body;
