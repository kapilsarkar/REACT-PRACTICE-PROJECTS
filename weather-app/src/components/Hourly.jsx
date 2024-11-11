const Hourly = (props)=>{
    const {dayOne} =props
    return(
       <div>
         <p>{dayOne.time}</p>
       </div>
    )
}

export default Hourly;