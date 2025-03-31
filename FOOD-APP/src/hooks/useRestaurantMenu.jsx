/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json?.data);
    }
    catch(error){
      console.error("Error While Fetching Data:",error)
    }
    
  };
  return resInfo;
};

export default useRestaurantMenu;
