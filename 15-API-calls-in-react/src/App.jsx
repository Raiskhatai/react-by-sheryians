import React from "react";
// for using axios we use command
// command :- npm i axios
// then import axios
import axios from "axios";
import { useState } from "react";

//  api website
// 1 jsonplaceholder
// 2 lorem picsum

const App = () => {
  /*  with fetch */

  // async function getdata() {
  //   console.log("oye");
  //   let response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   response = await response.json();
  //   console.log(response);
  //   console.log("hi");
  // }

  /*  with axios */
  // let getdataformaxios = async () => {
  //   // 1 and better way
  //   // let {data} = await axios.get(
  //   //   "https://jsonplaceholder.typicode.com/users",
  //   // );
  //   // console.log(data);

  //   // 2
  //   let response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   console.log(response.data);
  // };

  const [data, setdata] = useState([]);

  let getdatashow = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response.data);
    setdata(response.data);
  };

  return (
    <div>
      {console.log("hello")}
      {/* <button onClick={getdata}>get</button> */}
      {/* <button onClick={getdataformaxios}>get</button> */}
      <button onClick={getdatashow}>get data</button>
      {data.map((elem, idx) => {
        return <h3 key={idx}>{elem.email}</h3>;
      })}
    </div>
  );
};

export default App;
