/* eslint-disable react/prop-types */
const User = ({user,handleDeleteUser})=>{
    const {id,userName} = user;
    const handleDelete = (id)=>{
      console.log(id);
      handleDeleteUser(id)
    }
    return(
        <article className="user">
           <h2>{id}</h2>
           <p>{userName}</p>
           <button onClick={()=>{handleDelete(id)}}>Delete</button>
        </article>
    )
}

export default User;