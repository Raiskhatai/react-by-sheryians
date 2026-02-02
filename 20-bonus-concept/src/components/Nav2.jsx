import React from "react";

const Nav2 = (props) => {
  console.log(props);
  return (
    <div className="nav2">
      <h1>home</h1>
      <h1>about</h1>
      <h1>courses</h1>
      <h1>product</h1>
      <button
        onClick={() => {
          props.setlogo("logo change setdata from child to parent");
        }}
      >
        hello
      </button>
    </div>
  );
};

export default Nav2;
