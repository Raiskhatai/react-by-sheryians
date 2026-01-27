import React from "react";

const card = (props) => {
  console.log(props);
  return (
    <>
      
        <div className="card">
          <img src={props.img} alt="" />
          <h1>{props.fname}</h1>
          <p>{props.job}</p>
          <button className="btn">profile</button>
      </div>
    </>
  );
};

export default card;
