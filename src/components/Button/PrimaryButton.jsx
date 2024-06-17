import React from "react";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
  return (
    <Link to={props.to}>
      <button className="shadow-lg mt-4 overflow-hidden w-32 p-2 h-12 bg-white text-rose-950 border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group hover:text-white">
        {props.text}
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-rose-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-rose-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-rose-950 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
          {props.subtext}
        </span>
      </button>
    </Link>
  );
}

export { PrimaryButton };
