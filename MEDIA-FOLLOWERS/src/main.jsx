import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}/>
))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
