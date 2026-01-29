import React from "react";

const Onmousemove = () => {
  /* onMouseMove={} */
  function enter(elem) {
    console.log(elem.clientX, elem.clientY);
  }
  return (
    <div>
      <div
        className="box"
        onMouseMove={function (elem) {
          enter(elem);
        }}
      >
        mouse move here
      </div>
    </div>
  );
};

export default Onmousemove;
