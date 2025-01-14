import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const addTask = () => {
    setTask((oldTask) => {
      return [...oldTask, user];
    });
    setUser("");
  };
  return (
    <>
      <div className=" flex flex-col flex-wrap justify-center gap-2 md:flex-row ">
        <img
          className="w-[98%] md:w-[46%] h-[80%] rounded-3xl p-3 shadow-2xl"
          src="https://lumiere-a.akamaihd.net/v1/images/au_marvel_avengersendgame_hero_m_f8ba68d1.jpeg?region=0,133,750,422"
        />
        <div className="p-2 mt-2 bg-violet-100 shadow-2xl w-full md:w-[50%] rounded-3xl mb-2">
          <input
            type="text"
            className="p-2 rounded-sm shadow-2xl"
            value={user}
            onChange={handleChange}
          />
          <button
            className="bg-violet-900 text-white ml-1 p-2 font-bold rounded-sm"
            onClick={addTask}
          >
            ADD
          </button>
          <ul className="p-2 font-bold">
            {task.map((task, index) => {
              return (
                <li
                  className="list-none p-2"
                  key={index}
                >
                  {task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
