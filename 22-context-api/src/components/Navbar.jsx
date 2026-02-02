import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../../ThemeContext";

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h1>logo</h1>
      <Nav2 />
    </div>
  );
};

export default Navbar;
