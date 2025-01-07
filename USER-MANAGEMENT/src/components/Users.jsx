/* eslint-disable react/prop-types */
import User from "./User";

const Users = ({ users }) => {
  return (
    <section className="users">
      {users.map((user) => (
        <User key={users.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
