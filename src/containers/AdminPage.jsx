import { AdminBase } from "./AdminBase";
import React, { useState } from "react";
import { AdminMain } from "./AdminMain";

const AdminPage = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <div className="flex h-auto items-center justify-center bg-white">
      <AdminBase />
      <div className="flex-grow bg-white shadow-2xl w-full h-full transform transition duration-500 scale-100 opacity-90 hover:opacity-100">
        <div className="w-full h-full overflow-y-auto">
          <AdminMain />
        </div>
      </div>
    </div>
  );
};

export { AdminPage };
