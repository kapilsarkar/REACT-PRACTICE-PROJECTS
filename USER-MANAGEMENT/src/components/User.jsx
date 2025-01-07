/* eslint-disable react/prop-types */
const User = ({user})=>{
    const {id,userName} = user;
    return(
        <article className="user">
           <h2>{id}</h2>
           <p>{userName}</p>
           <button>Delete</button>
        </article>
    )
}

export default User;