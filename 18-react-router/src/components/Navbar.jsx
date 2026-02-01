import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">logo</div>
      <div className="links">
       <Link to="/" >home</Link>
       <Link to="/about" >about</Link>
       <Link to="/contact" >contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
