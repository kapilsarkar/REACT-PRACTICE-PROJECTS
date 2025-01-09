import { useContext } from "react";
import User from "./User";
import { UsersContext } from "../context/UsersContext";

const Users = () => {
  const { users } = useContext(UsersContext);
  return (
    <div className="users">
      {users.map((user) => (
        <User key={users.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
