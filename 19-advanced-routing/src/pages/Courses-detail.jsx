import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let params = useParams();
  return (
    <div>
      <h1 className="text-4xl text-white absolute top-1/2 left-1/2 translate-[-50%]">
        {params.id}
      </h1>
    </div>
  );
};

export default Detail;
