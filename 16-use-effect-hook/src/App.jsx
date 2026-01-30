import React, { useEffect, useState } from "react";

const App = () => {
  /*  first way mounting */
  // useEffect(() => {
  //   console.log("use state is running...");  // whenever state(element or kuch bhi code) change its running.
  // });
  // const [num, setnum] = useState(0);

  /* second way useeffect with dependency */
  // const [num, setnum] = useState(0);
  // useEffect(() => {
  //   console.log("use effect is running"); // single time running when num change
  // }, []);

  /* other 1 example */
  // const [num, setnum] = useState(0);
  // useEffect(() => {
  //   console.log("use effect is running"); //   running whenever num changes
  // }, [num]);

  /* other 2 example */

  let achanging = () => {
    console.log("a changing");
  };
  let bchanging = () => {
    console.log("b changing");
  };

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  useEffect(() => {
    achanging();
  }, [a]);
  // a par depend hey to jab a per click hoga tab change hoga b par click hone par nhi . agar b kar to b [b] par depend ho jayega feer click par he hoga a par nhi or a b [a,b] dono kar tab sird in dono ko dabane par he kaam karega.

  /* wrong way */
  // function random() {
  //   console.log("hello");
  // }
  // random();

  return (
    <div>
      {/* 1 and 2 other 1 ex. mounting example */}
      {/* <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        click
      </button> */}

      {/* other 2 ex. */}

      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        change a
      </button>
      <button
        onClick={() => {
          setb(b + 1);
        }}
      >
        change b
      </button>
    </div>
  );
};

export default App;
