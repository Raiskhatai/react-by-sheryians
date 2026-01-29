import React from "react";

const Onchange = () => {
  function change(val) {
    console.log(val);
  }
  return (
    <div>
      {/* first way to get value from input */}
      {/* <input
        type="text"
        placeholder="enter"
        onChange={function (elem) {
          change(elem.target.value);
        }}
      /> */}

      {/* second way to get value from input */}
      <input
        type="text"
        placeholder="enter"
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
      />
    </div>
  );
};

export default Onchange;
