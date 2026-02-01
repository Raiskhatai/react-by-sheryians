import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-12 items-center bg-blue-900 text-xl text-white p-2  flex justify-between">
      <div className="logo">logo</div>
      <div className="page-link gap-6 flex">
        <Link to="/" >home</Link>
        <Link to="/about" >about</Link>
        <Link to="/contact" >contact</Link>
        <Link to="/product" >product</Link>
      </div>
    </div>
  );
};

export default Navbar;
