const Nav2 = (/* props */ { children }) => {
  return (
    <div className="nav2">
      <h1>home</h1>
      <h1>about</h1>
      {children[0]}
      {children[1]}
      {/* {props.children[0]}
      {props.children[1]} */}
    </div>
  );
};

export default Nav2;
