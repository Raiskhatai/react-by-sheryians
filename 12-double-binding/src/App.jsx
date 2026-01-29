import React, { useState } from "react";

const App = () => {
  const [text, settext] = useState("");

  let submit = (e) => {
    e.preventDefault();

    // input waps blank karne ke liye
    settext("");
  };

  // simple way
  // let change = (e) => {
  //   settext(e.target.value);
  // };

  return (
    <div>
      <form
        action=""
        onSubmit={function (e) {
          submit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter value"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button>click</button>
      </form>
    </div>
  );
};

export default App;
