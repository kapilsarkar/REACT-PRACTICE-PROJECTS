/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = ({user})=>{
    const {users, setUsers} = useContext(UserContext);
    const {id,userName} = user
    console.log(id,userName)
    return(
        <>
         <div className="">
            <h2>{id}</h2>
            <h2>{userName}</h2>
         </div>
        </>
    )
}

export default User;