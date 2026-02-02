import React, { useState } from "react";
import Nav2 from "./Nav2";

const Navbar = () => {
  const [logo, setlogo] = useState("logo");
  return (
    <div className="navbar">
      <h1>{logo}</h1>
      <Nav2 setlogo={setlogo} />
    </div>
  );
};

export default Navbar;
