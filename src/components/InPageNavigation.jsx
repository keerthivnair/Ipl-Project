import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function InPageNavigation({ teams, children }) {
  const [index, setIndex] = useState(0);
  let tabline = useRef();
  let btn = useRef();

  useEffect(() => {
    toggleBtn(btn.current, 0);
  }, []);
  function toggleBtn(target, id) {
    let offsetWidth = target.offsetWidth;
    let offsetLeft = target.offsetLeft;
    tabline.current.style.left = `${offsetLeft}px`;
    tabline.current.style.width = `${offsetWidth}px`;
    setIndex(id);
  }
  return (
    <div className=" w-full ">
      <div
        className={
          "bg-blue-800 w-full relative flex justify-between items-end" +
          (teams.length > 2
            ? " h-[100px] border-b border-gray-300"
            : " h-[50px]")
        }
      >
        {teams.length > 2
          ? teams.map(({ path, title }, id) => (
              <Link to={path}>
                <button
                  ref={id == 0 ? btn : null}
                  className={`btn  m-1  text-sm md:text-xl md:font-bold px-10 py-2 rounded-md cursor-pointer hover:bg-gray-200/30 text-sm   ${
                    index === id ? "text-white bg-gray-200/30" : "text-gray-200"
                  }`}
                  key={id}
                  onClick={(e) => {
                    toggleBtn(e.target, id);
                  }}
                >
                  <h1>{title}</h1>
                </button>
              </Link>
            ))
          : teams.map((team, id) => (
              <button
                ref={id == 0 ? btn : null}
                className={`btn   text-sm md:text-xl m-1 font-bold w-[50%] px-10 py-2 rounded-md cursor-pointer  ${
                  index === id ? "text-white bg-gray-200/30" : "text-gray-200"
                }`}
                key={id}
                onClick={(e) => {
                  toggleBtn(e.target, id);
                }}
              >
                <h1>{team}</h1>
              </button>
            ))}
        <hr
          ref={tabline}
          className="border-white border-2 absolute  duration-300"
        />
      </div>

      {teams.length > 2 ? "" : children[index]}
    </div>
  );
}

export default InPageNavigation;
