import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const {setUsers} = useContext(UsersContext);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), userName: userName };
    console.log(newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserName("");
  };
  return (
    <>
      <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
          <button>Add User</button>
        </form>
      </div>
    </>
  );
};

export default NewUser;
