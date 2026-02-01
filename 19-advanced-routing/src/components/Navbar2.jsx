import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let nevigate = useNavigate();
  return (
    <div className="flex flex-col">
      <button
        className="w-40 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate("/");
        }}
      >
        return home
      </button>

      <button
        className="w-30 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate(-1);
        }}
      >
        back
      </button>

      <button
        className="w-30 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate(+1);
        }}
      >
        next
      </button>

    </div>
  );
};

export default Navbar2;
