import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <h1>THEME SWITCHER</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
