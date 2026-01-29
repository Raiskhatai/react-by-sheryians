import React from "react";

const Onwheel = () => {
  function wheel(val) {
    if (val > 0) {
      console.log("nichey ja rhey ");
    } else {
      console.log("waps upar ja rhey");
    }
  }
  return (
    <div
      /* 
      onWheel scroll pe kaam karta hey .
      deltaY speed batata hey scroll karne ki.
          */
      onWheel={(elem) => {
        wheel(elem.deltaY);
      }}
    >
      <div className="page1">page1</div>
      <div className="page2">page2</div>
      <div className="page3">page3</div>
    </div>
  );
};

export default Onwheel;
