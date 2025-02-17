import { useParams } from "react-router-dom";

const MealInfo = ()=>{
    const {idMeal} = useParams();
    console.log(idMeal)
    return(
        <>

        </>
    )
}

export default MealInfo;