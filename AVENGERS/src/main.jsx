import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Captain from "./components/Captain/Captain";
import Wolv from "./components/Wolv/Wolv";
import Spider from "./components/Spider/Spider";
import Iron from "./components/Iron/Iron";
import Hulk from "./components/Hulk/Hulk";
import { ThemeProvider } from "./contexts/ThemeProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/Captain" element={<Captain />} />
      <Route path="/Wolv" element={<Wolv />} />
      <Route path="/Spider" element={<Spider />} />
      <Route path="/Iron" element={<Iron />} />
      <Route path="/Hulk" element={<Hulk />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
