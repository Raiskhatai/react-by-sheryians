import React from "react";
// read READ.md file

const App = () => {
  localStorage.setItem("age", 20);
  let age = localStorage.getItem("age");
  console.log("age is " + age);

  let user1 = localStorage.getItem("user");
  console.log(user1);

  localStorage.removeItem("user");

  localStorage.clear();

  sessionStorage.clear();

  let obj = {
    name: "rais",
    age: 21,
    hobby: "coding",
  };
  localStorage.setItem("user", JSON.stringify(obj));

  let getobj = JSON.parse(localStorage.getItem("user"));
  console.log(getobj);

  


  return <div></div>;
};

export default App;
