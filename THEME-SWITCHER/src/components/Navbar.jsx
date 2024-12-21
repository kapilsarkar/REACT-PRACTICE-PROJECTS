import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Blog">Blog</Link>
        </div>
      </nav>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider-round"></span>
        </label>
      </div>
    </>
  );
};

export default Navbar;
