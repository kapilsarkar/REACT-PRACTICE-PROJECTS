import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const Users = () => {
  const { users } = useContext(UserContext);
  console.log(users)
  return (
    <>
      <ul className="bg-slate-950 text-white p-1">
        <li className=" list-none">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default Users;
