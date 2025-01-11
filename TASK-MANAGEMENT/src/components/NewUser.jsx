import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const { setUsers } = useContext(UserContext);

  const handelUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onSubmit = () => {
    const newUser = { id: new Date().getTime().toString(), userName: userName };
    console.log(newUser);
    setUsers((prevUser) => [...prevUser, newUser]);
    setUserName("");
  };
  return (
    <div className=" flex justify-center mt-2">
      <input
        type="text"
        name="userName"
        value={userName}
        required
        onChange={handelUserNameChange}
        className="p-2"
      />
      <button
        onClick={onSubmit}
        className="bg-green-900 text-white p-2 rounded-md"
      >
        ADD TASK
      </button>
    </div>
  );
};

export default NewUser;
