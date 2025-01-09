import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import {UsersContext } from "./context/UsersContext";
import { useState } from "react";
function App() {
    const [users, setUsers] = useState([
          { id: 1, userName: "Kapil Sarkar" },
          { id: 2, userName: "John Cena" },
        ]);
  return (
    <>
      <h2>USER-MANAGEMENT APP</h2>
      <UsersContext.Provider value={{users,setUsers}}>
        <div>
          <NewUser />
          <Users />
        </div>
      </UsersContext.Provider>
    </>
  );
}

export default App;
