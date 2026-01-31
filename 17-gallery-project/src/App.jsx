import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [images, setimages] = useState([]);
  const [index, setindex] = useState(1);

  let loading_text = (
    <h3 className=" absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
      loading...
    </h3>
  );
  if (images.length > 0) {
    loading_text = images.map((elem, idx) => {
      return (
        <div className="" key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  useEffect(() => {
    getdata();
  }, [index]);

  async function getdata() {
    let { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index + 1}&limit=30`,
    );
    setimages(data);
  }
  return (
    <div className=" bg-gray-900 pb-10 ">
      <div className="img-container min-h-[90vh] flex flex-wrap justify-center text-white items-start text-3xl ">
        {loading_text}
      </div>

      <div className="button-container flex justify-center items-center capitalize ">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index >= 2) {
              setindex(index - 1);
            }
          }}
          className="next bg-blue-600 cursor-pointer active:w-32 active:h-14 hover:bg-amber-500 w-30 h-12 mr-2 rounded-2xl text-white font-bold text-2xl capitalize flex justify-center items-center `${opacity:0}` "
        >
          prev
        </button>
        <h1 className="text-2xl text-white">page {index}</h1>
        <button
          onClick={() => {
            setindex(index + 1);
          }}
          className="prev bg-blue-600 cursor-pointer active:w-32 active:h-14 hover:bg-amber-500 w-30 h-12 ml-2 rounded-2xl text-white font-bold text-2xl capitalize flex justify-center items-center "
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
