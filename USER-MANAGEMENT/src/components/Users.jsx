/* eslint-disable react/prop-types */
import User from "./User";

const Users = ({ users,handleDeleteUser }) => {
  return (
    <div className="users">
      {users.map((user) => (
        <User key={users.id} user={user} handleDeleteUser={handleDeleteUser}/>
      ))}
    </div>
  );
};

export default Users;
