import React, { useState } from "react";

const Increament = () => {
  let [num, setnum] = useState(0);

  function increase() {
    setnum(num + 1);
  }

  function decrease() {
    setnum(num - 1);
  }

  function increase_5() {
    setnum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button style={{width:"170px"}} onClick={increase_5}>increase by 5</button>
    </div>
  );
};

export default Increament;
