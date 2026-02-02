// 1. create karo context
// 2. provide karo data
// 3. use karo data ko

import { useState } from "react";
import { createContext } from "react";

export let ThemeDataContext = createContext();

const ThemeContext = (props) => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <ThemeDataContext value={[theme,settheme]}>{props.children}</ThemeDataContext>
    </div>
  );
};

export default ThemeContext;
