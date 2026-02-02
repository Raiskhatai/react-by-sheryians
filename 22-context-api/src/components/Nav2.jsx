import { useContext } from "react";
import { ThemeDataContext } from "../../ThemeContext";

const Nav2 = (/* props */ { children }) => {
  const [theme, settheme] = useContext(ThemeDataContext);
  return (
    <div className="nav2">
      <h1>home</h1>
      <h1>about</h1>
      <h1>courses</h1>
      <h1>products</h1>
      <h1>{theme}</h1>
    </div>
  );
};

export default Nav2;
