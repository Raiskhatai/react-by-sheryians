import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="sections text-white bg-purple-400 w-full h-12 flex items-center justify-center">
        <div className="section_links flex items-center gap-12">
          <Link
            to="man"
            className="men capitalize text-black font-bold text-2xl "
          >
            man
          </Link>
          <Link
            to="woman"
            className="men capitalize text-black font-bold text-2xl "
          >
            woman
          </Link>
          <Link
            className="men capitalize text-black font-bold text-2xl "
            to="kid"
          >
            kids
          </Link>
        </div>
      </div>
      <h1 className="text-white text-2xl font-bold absolute top-1/2 left-1/2">
       
      </h1>
      <Outlet />
    </div>
  );
};

export default Product;
