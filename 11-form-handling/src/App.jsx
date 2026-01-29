import React from "react";

const App = () => {
  /* submit karne page reload ho jata hey ise rokne ke liye preventDefault() propety use karenge yeah onSubmit() se chalti hey */

  function submit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input type="text" placeholder="enter value" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
