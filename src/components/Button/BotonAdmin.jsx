import React from "react";

const BotonAdmin = ({ text, color, onClick }) => {
  let colorClasses;

  switch (color) {
    case "verde":
      colorClasses = "bg-green-500 hover:bg-green-700";
      break;
    case "rojo":
      colorClasses = "bg-red-500 hover:bg-red-700";
      break;
    case "azul":
      colorClasses = "bg-blue-500 hover:bg-blue-700";
      break;
    case "morado":
      colorClasses = "bg-purple-500 hover:bg-purple-700";
      break;
    case "amarillo":
      colorClasses = "bg-yellow-500 hover:bg-yellow-700";
      break;
    default:
      colorClasses = "bg-black hover:bg-gray-700";
  }

  return (
    <button
      className={`overflow-hidden w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group ${colorClasses}`}
      onClick={onClick}
    >
      {text}
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-rose-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-rose-900 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        &nbsp;Panel!
      </span>
    </button>
  );
};

export { BotonAdmin };
