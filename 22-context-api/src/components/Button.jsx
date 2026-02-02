import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../../ThemeContext";

const Button = () => {
  const [theme, settheme] = useContext(ThemeDataContext);
  return (
    <div>
      <button
        onClick={() => {
          settheme("dark");
        }}
      >
        change theme
      </button>
    </div>
  );
};

export default Button;
