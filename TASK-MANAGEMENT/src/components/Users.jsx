import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const Users = () => {
  const { users } = useContext(UserContext);
  console.log(users)
  return (
    <>
      <ul className="">
        <li className=" list-none bg-violet-900 text-white p-3 rounded-md">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default Users;
