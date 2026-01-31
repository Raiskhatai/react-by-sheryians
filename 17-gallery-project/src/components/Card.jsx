import React from "react";

const Card = (props) => {
  return (
    <div>
     <a href={props.elem.url}>
                 <div className="w-55 h-55 m-5 flex-wrap flex rounded-2xl overflow-hidden justify-center ">
                   <img
                     className="h-45 w-45 border-white rounded-2xl "
                     src={props.elem.download_url}
                     alt=""
                   />
                   <h1 className="text-xl  ">{props.elem.author}</h1>
                 </div>
               </a>
    </div>
  );
};

export default Card;
