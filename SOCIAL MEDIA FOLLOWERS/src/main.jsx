import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import Srk from "./components/Srk/Srk";
import Vijay from "./components/Vijay/Vijay";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Salman from "./components/Salman/Salman";
import Amitabh from "./components/Amitabh/Amitabh";
import Virat from "./components/Virat/Virat";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Srk" element={<Srk />} />
      <Route path="Vijay" element={<Vijay />} />
      <Route path="Salman" element={<Salman />} />
      <Route path="Amitabh" element={<Amitabh />} />
      <Route path="Virat" element={<Virat />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
