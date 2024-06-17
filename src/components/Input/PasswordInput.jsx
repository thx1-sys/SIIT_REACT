import { useState } from "react";

function PasswordInput({ onChange, isError }) {
  const [showPassword, setShowPassword] = useState(false);
  const borderColor = isError ? "border-red-500" : "border-gray-400";
  const textColor = isError ? "text-red-500" : "text-gray-400";
  const placeholder = isError ? "placeholder-red-500" : "placeholder-gray-600";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={`w-full ring-0 outline-none border ${borderColor} bg-gray-100 shadow-xl shadow-gray-200 text-neutral-900 ${placeholder} text-md rounded-lg focus:ring-blue-800  focus:border-blue-800 block  p-4 hover:border-blue-800 hover:ring-blue-800 mt-4 pl-12 transform transition duration-500`}
          placeholder="Contraseña"
          onChange={onChange}
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
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon icon-tabler icons-tabler-outline icon-tabler-lock ${textColor} transform transition duration-500`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
        {showPassword ? (
          <svg
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-itd-blue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.5 12a8.5 8.5 0 0 1 15 0"
            />
          </svg>
        ) : (
          <svg
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.5 12a8.5 8.5 0 0 1 15 0"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export { PasswordInput };
