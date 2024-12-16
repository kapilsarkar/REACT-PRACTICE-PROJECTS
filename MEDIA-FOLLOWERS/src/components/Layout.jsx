import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <div className=" flex">
    <Header />
    <Outlet />
    </div>
     
    </>
  );
};

export default Layout;
