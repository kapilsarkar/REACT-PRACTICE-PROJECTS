/* eslint-disable react/prop-types */
const FoodCard = ({detail})=>{
    console.log(detail)
    return(
        <>
        <div>
            {detail.map((currItem,index)=>{
                console.log(currItem)
                <p>{index}</p>
            })}
        </div>
        </>
    )
}

export default  FoodCard;