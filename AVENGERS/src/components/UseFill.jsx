import { useState } from "react";

const UseFill = ()=>{
     const [fillingPercentage, setFillingPercentage] = useState(0)

     const fillTheJug = () => {
        setFillingPercentage((prev) => {
          if (prev === 0) return 1;
          const change = prev + prev * 0.5;
          if (change > 100) return 100;
          return change;
        });
      }

      const emptyTheJug = () => {
        setFillingPercentage((prev) => {
          if (prev < 1) return 0;
          return prev - prev * 0.5;
        });
      };

      return[fillingPercentage,fillTheJug,emptyTheJug]
}

export default UseFill;