import React, { useState, useEffect } from "react";
import "./StudentPage.css";
import { HomeButtomNavDashAdmin } from "../components/Button/HomeButtomNavDashAdmin";
import { HomeButtomNavDashMinAdmin } from "../components/Button/HomeButtomNavDashMinAdmin.";
import { NavComponentAdmin } from "../components/Navbar/NavComponentAdmin";
import { NavComponentAdminMin } from "../components/Navbar/NavComponentAdminMin";

function AdminBase() {
  const [isNavVisible, setNavVisible] = useState(
    localStorage.getItem("isNavVisible") === "true"
  );

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  useEffect(() => {
    localStorage.setItem("isNavVisible", isNavVisible);
  }, [isNavVisible]);

  return (
    <>
      {isNavVisible ? (
        <div className="h-screen overflow-auto box-border w-full sm:w-3/24 bg-white text-itd-blue grid grid-cols-1 auto-rows-auto items-center justify-center transform transition duration-500 scale-100 opacity-90 hover:opacity-100 text-xs shadow-2xl">
          <div
            className={`h-full flex flex-col justify-between px-2 text-xs transition-transform duration-700 ease-in-out transform overflow-auto ${
              isNavVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <HomeButtomNavDashAdmin toggleNav={toggleNav} />
            <NavComponentAdmin />
          </div>
        </div>
      ) : (
        <div className="box-border w-full sm:w-1/24 bg-white shadow-2xl texanimate-slideLeftFadeIn t-itd-blue grid grid-cols-1 auto-rows-auto items-center justify-center scale-100 opacity-95 hover:opacity-100 text-xs">
          <div
            className={`h-screen flex flex-col justify-between px-2 text-xs transition-transform duration-700 ease-in-out transform fixed ${
              isNavVisible ? "translate-y-full" : "translate-y-0"
            }`}
          >
            <HomeButtomNavDashMinAdmin toggleNav={toggleNav} />
            <NavComponentAdminMin />
          </div>
        </div>
      )}
    </>
  );
}

export { AdminBase };
