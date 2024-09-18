import {  useState } from "react"

const InputCounter = ()=>{
  const [input,setInput] = useState('')

  const handleInputChange = (e)=>{
     setInput(e.target.value)
  }

  function Increment(e){
      setInput(e.target.value + 1)
  }

    return(
        <div className="input-counter">
           <h3 className="input-counter-heading">Input Counter</h3>
           <div className="input-counter-details">
             <p className="input-result">{input}</p>
             <input type="text" className="input-box" value={input} onChange={handleInputChange}/>
           </div>
           <div className="input-counterBtn">
              <button className="plusBtn" onClick={Increment}>Increment</button>
           </div>
        </div>
    )
}

export default InputCounter