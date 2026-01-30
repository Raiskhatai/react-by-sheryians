import React, { useState } from "react";
import { Trash } from "lucide-react";

const App = () => {
  const [input, setinput] = useState("");
  const [area, setarea] = useState("");

  const [task, settask] = useState([]);

  function submit(e) {
    e.preventDefault();

    let copytask = [...task];
    copytask.push({ input, area });
    settask(copytask);
    console.log(copytask);

    setinput("");
    setarea("");
  }

  function del(e,idx) {
    let copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  }

  return (
    <div className="bg-gray-900 pt-10 lg:flex pb-10">
      <form
        action=""
        className="justify-center lg:w-1/2 lg:border-r-2 border-amber-50 pl-10 pr-10 text-xl mb-10"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <h1 className="text-white text-3xl capitalize font-bold pb-10">
          add notes
        </h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-none border-2 border-white text-white placeholder:white rounded-[5px] w-full pl-8 outline-none h-18 text-xl"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <textarea
          name=""
          placeholder="Enter Text"
          id=""
          className="bg-none border-2 border-white text-white placeholder:white margin w-full pt-4 pl-8 rounded-[5px] mt-10 outline-none h-26"
          value={area}
          onChange={(e) => {
            setarea(e.target.value);
          }}
        ></textarea>

        <button className="bg-white w-full mt-10 p-6 cursor-pointer rounded-2xl text-black hover:text-white hover:bg-amber-500 h-12 flex items-center justify-center">
          submit
        </button>
      </form>

      <div className="lg:w-1/2 pl-10 min-h-screen">
        <h1 className="text-white text-3xl capitalize font-bold ">
          recent notes
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="note relative p-3 bg-[url('data:image/png;base64,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')] w-40 h-52  rounded-2xl flex-nowrap "
              >
                <p className="text-center pb-1 font-bold">{elem.input}</p>
                <p className="text-gray-800 capitalize ">{elem.area}</p>
                <div
                  className="delete bg-red-500 rounded-4xl p-3 w-fit absolute bottom-5 right-15 cursor-pointer hover:bg-amber-400 hover:scale-[1.1]"
                  onClick={(e) => {
                    del(e,idx);
                  }}
                >
                  <Trash className="" size={16} strokeWidth={3} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
