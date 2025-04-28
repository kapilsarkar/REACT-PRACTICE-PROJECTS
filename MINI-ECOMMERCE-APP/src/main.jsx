import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<div>Products Page</div>} />
        <Route path="/" element={<div>Cart Page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
