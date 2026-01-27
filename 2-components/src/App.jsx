import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";   {/* yaha humne function ko import kiya hey Navbar name se from ./components/navbar file se */}

const App = () => {
  return (
    <div>
      <Navbar />  {/* yeah function call karne ka tarikha hey simply js mey ise Navbar() but react jsx mey hum function ko tags se call kar sakte hey.*/}
      <Card />
      <Card />
    </div>
  );
};

export default App;
