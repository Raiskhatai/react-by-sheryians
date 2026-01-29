import React, { useState } from "react";

const Destructuring = () => {
  /* topic name is updating state correctly (array,object,immutabilty) */
  //   const [obj, setobj] = useState({ name: "salman", age: 20 });
  //   //   const [arr, setarr] = useState([20, 30, 40]);

  //   let change = () => {

  //     // yeh kaam nhi karega kyu ki array object par ese changes nhi hote destructring se hoga
  //     // obj.name = "shahrukh";
  //     // setobj(obj);

  //     /* 1 */
  //     // let newobj = { ...obj };
  //     // newobj.name = "shahrukh";
  //     // newobj.age = 21;
  //     // setobj(newobj);

  //     /* 2 */
  /*  yaha prev ka num jesa he work kar rha hey */
  //     setobj((prev) => ({ ...prev, name: "shahrukh", age: 50 }));

  //     /* arr */
  //     // let newarr = [...arr];
  //     // newarr.push(70, 80, 90);
  //     // setarr(newarr);
  //   };

  /* topic name :- batch update in react */
  const [num, setnum] = useState(10);
  function change() {
    /* react ise ek baar he upgrade karega use lagta hey yeah 3 kaam to same to repeat kyu  */
    // setnum(num + 1);
    // setnum(num + 1);
    // setnum(num + 1);

    /* solution */
    /*  yaha prev ka num jesa he work kar rha hey */
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
  }

  return (
    <div>
      <h1>{num}</h1>
      {/* <h1> {obj.name}</h1> */}
      <button onClick={change}> click</button>
    </div>
  );
};

export default Destructuring;
