import React, { useState } from "react";
import { StudentBase } from "./StudentBase";
import { InscriptionPayMain } from "./InscriptionPayMain";

const InscriptionPayPage = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-itd-blue">
      <StudentBase />
      <div className="flex-grow bg-white shadow-2xl w-full h-full transform transition duration-500 scale-100 opacity-90 hover:opacity-100">
        <div className="w-full h-full overflow-y-auto">
          <InscriptionPayMain />
        </div>
      </div>
    </div>
  );
};

export { InscriptionPayPage };
