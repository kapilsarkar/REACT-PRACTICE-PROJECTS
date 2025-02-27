/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withCounter from "./WithCounter";

const ClickCounter = (props)=>{
    const {count,incrementCount}= props;
   
    return(
        <>
           <div>
            <button onClick={incrementCount}>Click Me</button>
            <h2>Count is :{count}</h2>
           </div>
        </>
    )
}

export default withCounter(ClickCounter);