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
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}>
    <Route path="Srk" element={<Srk/>}/>
    <Route path="Vijay" element={<Vijay/>}/>
  </Route>)
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
