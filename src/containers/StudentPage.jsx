import React, { useState } from "react";
import "./StudentPage.css";
import { HomeStudentMain } from "./HomeStudentMain";
import { StudentBase } from "./StudentBase";

function StudentPage() {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen items-center justify-center bg-itd-blue">
      <StudentBase />
      <div className="flex-grow bg-white shadow-2xl w-full h-full transform transition duration-500 scale-100 opacity-90 hover:opacity-100">
        <div className="w-full h-full overflow-y-auto">
          <HomeStudentMain />
        </div>
      </div>
    </div>
  );
}

export { StudentPage };
