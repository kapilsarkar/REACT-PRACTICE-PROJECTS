import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
         <Route path="/" element={<Layout />}>
      <Route path="" element={<Body />} />
      <Route path="/About" element={<About />}>
      <Route/>
    </Route>
    </Routes>
   
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
