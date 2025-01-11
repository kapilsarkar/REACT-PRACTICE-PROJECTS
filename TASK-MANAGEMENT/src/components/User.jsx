/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = ({ user }) => {
  const { users, setUsers } = useContext(UserContext);
  const { id, userName } = user;
  console.log(id, userName);
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const handleUpdate = (id, userName) => {
    const updateUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userName };
      }
      return user;
    });
    setUsers(updateUsers);
  };
  return (
    <>
      <li className="bg-yellow-300 p-2 text-violet-900 rounded-md border-x-2 border-violet-900 font-bold">
        <p>{id}</p>
        <p>{userName}</p>
        <button
          className="bg-violet-900 text-white p-2 rounded-md"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-violet-900 text-white p-2 rounded-md"
          onClick={() => handleUpdate(id)}
        >
          Update
        </button>
      </li>
    </>
  );
};

export default User;
