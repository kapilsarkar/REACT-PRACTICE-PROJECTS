import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const { users, setUsers } = useContext(UsersContext);
  const { id, userName } = user;
  const handleDelete = (id) => {
    console.log(id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{userName}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
