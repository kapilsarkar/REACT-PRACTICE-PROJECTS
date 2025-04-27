import { Outlet } from "react-router";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div className=" bg-white">
      <NavBar />
      <main className="max-w-7xl min-h-screen mx-auto px-2">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
