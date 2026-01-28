import React from "react";
import HeroCards from "./HeroCards";

const heroRight = (props) => {
  return (
    <div className="mt-7 w-full h-full pb-28 flex flex-nowrap gap-10 overflow-x-auto ">
      {props.users.map((item,idx) => {
        return <HeroCards img={item.img} id={idx} feedback={item.feedback} color={item.color}/>;
      })}
    </div>
  );
};

export default heroRight;
