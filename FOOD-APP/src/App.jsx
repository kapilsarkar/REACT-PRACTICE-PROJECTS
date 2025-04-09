//import React from "react";

import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    const data = {
      name: "Kapil Sarkar",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName }}
    ></UserContext.Provider>
  );
};

export default App;
