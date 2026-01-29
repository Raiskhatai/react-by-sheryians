import React from "react";
import Button from "./components/Onclick";
import Onchange from "./components/Onchange";
import Onmousemove from "./components/Onmousemove";
import Onwheel from "./components/Onwheel";

const App = () => {
  /* onClick={} */
  function btnclick() {
    console.log("clicked ho gaya oye");
  }

  /* onMouseEnter={} */
  function enter() {
    console.log("enter ho gaye oye");
  }

  return (
    <div style={{width:"100%",height:"100vh"}}>
      {/* <button className="btn" onClick={btnclick()} onMouseEnter={enter}>
        oye
      </button> */}

      <Onchange />
      <Button />
      <Onmousemove />
      <Onwheel />
    </div>
  );
};

export default App;
