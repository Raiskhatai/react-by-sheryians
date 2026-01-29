import React, { useState } from "react";

const Change = () => {
  // let a = 20;
  // function click() {
  //   a = 30;
  //   console.log(a);  // console par 30 hey par value screen par change nhi hoga direct. iske liye hum use karenge useState hook. react ki help lenge value change karne ke liye.
  // }

  // num value ko read karne ke liye
  // const [num, setnum] = useState(20);
  // const [username, setusername] = useState("shahrukh");
  const [users, setusers] = useState(["shahrukh ", "salman ", "aamir "]);
  function click() {
    // setnum() value set karne ke liye
    setusers(["john", " faiz", " faraz"]);
  }

  return (
    <div>
      <h1>value of a is {users}</h1>
      <button onClick={click}>click</button>
    </div>
  );
};

export default Change;
