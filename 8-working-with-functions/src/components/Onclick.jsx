import React from "react";

const Onclick = () => {
  return (
    <div>
      <div
        className="btn"
        onClick={function () {
          console.log("button pe click kiya hey ");
        }}
      >
        click
      </div>
    </div>
  );
};

export default Onclick;
