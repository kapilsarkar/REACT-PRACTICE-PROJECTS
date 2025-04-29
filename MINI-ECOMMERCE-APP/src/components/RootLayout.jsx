import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <NavBar />
          <main>
            <Outlet />
          </main>
        </div>
      </Provider>
    </>
  );
};

export default RootLayout;
