import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const Layout = () => {
  const [userName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    const data = {
      name: "Kapil Sarkar",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export default Layout;
