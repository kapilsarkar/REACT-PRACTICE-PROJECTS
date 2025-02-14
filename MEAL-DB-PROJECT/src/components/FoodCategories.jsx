import { useEffect, useState } from "react";

const FoodCateGories = () => {
  const [foodData, setFoodData] = useState();
  useEffect(() => {
    Category();
  }, [foodData]);
  const Category = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const json = await data.json();
    console.log(json.categories);
    setFoodData(json.categories);
  };
  return (
    
      <div>
        <h2 className="text-center font-bold">Top Meal Categories</h2>
        <div className=" flex flex-wrap justify-center gap-2 p-2">
          {foodData.map((value) => {
            return (
              <>
                <div className="w-48">
                    <p>{value.strCategory
                    }</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    
  );
};

export default FoodCateGories;
