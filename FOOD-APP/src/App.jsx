/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
} 

const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <AppLayout/>,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
          path: ".about",
          element: <About/>,
      }
    ]
  }
])

// function App() {
//   return (
//     <>
//       <Header/>
//       <Body/>
//       <Footer/>
//     </>
//   );
// }

// export default App;
