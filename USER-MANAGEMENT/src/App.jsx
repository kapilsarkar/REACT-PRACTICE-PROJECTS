import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Kapil Sarkar" },
    { id: 2, userName: "John Cena" },
  ]);
  const handleDeleteUser = (id) => {
    console.log(id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const handleAddNewUser = (newUser) => {
    console.log(newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <>
      <h2>USER-MANAGEMENT APP</h2>
      <div>
        <NewUser handleAddNewUser={handleAddNewUser} />
        <Users users={users} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}

export default App;
