import React from "react";
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className="Nav flex w-full bg-white h-16 items-center justify-between">
      <div className="nav-left-btn bg-black text-white h-1/2 rounded-2xl flex items-center justify-center p-3 uppercase">
        target audience
      </div>
      <div className="nav-right-btn bg-gray-300 text-black h-1/2 rounded-2xl flex items-center justify-center p-3 uppercase font-semibold"> digital banking playform
      </div>
    </div>
  );
};

export default Navbar;
