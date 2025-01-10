import { useState } from "react";
import NewUser from "./components/NewUser";
import { UserContext } from "./context/UserContext";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Kapil Sarkar" },
    { id: 2, userName: "Virat Kohli" },
  ]);
  return (
    <>
      <UserContext.Provider value={{ users, setUsers }}>
        <div>
          <h2 className="text-center p-3 bg-green-900 text-white font-bold">
            TASK-MANAGEMENT APP
          </h2>
          <NewUser />
          <Users />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
