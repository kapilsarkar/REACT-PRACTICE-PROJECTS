/* eslint-disable react/prop-types */
import { useState } from "react";

const NewUser = ({ handleAddNewUser }) => {
  const [userName, setUserName] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), userName: userName };
    handleAddNewUser(newUser);
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
