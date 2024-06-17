import React from "react";

function CodeInput({ isError, ...props }) {
  const borderColor = isError ? "border-red-500" : "border-gray-400";
  const textColor = isError ? "text-red-500" : "text-gray-400";
  const placeholder = isError ? "placeholder-red-500" : "placeholder-gray-600 ";

  return (
    <div className="relative">
      <div className="relative">
        <input
          {...props}
          className={`w-full ring-0 outline-none border ${borderColor} bg-gray-100 shadow-xl shadow-gray-200 text-neutral-900 ${placeholder} text-md rounded-lg focus:ring-blue-800  focus:border-blue-800 block  p-4 hover:border-blue-800 hover:ring-blue-800 mt-4 pl-12 transform transition duration-500`}
          placeholder="Ingresa el codigo de recuperación"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor} transform transition duration-500`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
          <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
        </svg>
      </div>
    </div>
  );
}

export { CodeInput };
