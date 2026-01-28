import React from "react";

const HeroCards = (props) => {
  console.log(props);
  return (
    <div
      className=" h-full w-1/3 bg-amber-600 rounded-2xl bg-center bg-cover pt-8 flex flex-col justify-between p-6 shrink-0"
      style={{ backgroundImage: [`url(${props.img})`] }}
    >
      <div className="index w-[38px] bg-black h-[38px]  rounded-4xl text-white flex items-center justify-center font-bold text-2xl">
        {props.id + 1}
      </div>
      <div className=" text-shadow-2xs
       cardText text-white  text-[14px] text-left ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
        veritatis officiis quae vitae ipsa corporis?
        <div className="botttomCRight flex items-center justify-center p-2">
            <div style={{backgroundColor:`${props.color}`}} className="feedba w-fit h-8mt-6 pt-2 pb-2 pl-6 pr-6 flex justify-center items-center rounded-4xl font-bold tracking-wider capitalize cursor-pointer ">
            {props.feedback}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
