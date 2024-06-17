import React, { useState } from "react";
import "./StudentPage.css";
import { StudentBase } from "./StudentBase";
import { CalendarMain } from "./CalendarMain";
import { NavbarHome } from "../components/Navbar/NavbarHome";
import { FooterHome } from "../components/Footer/FooterHome";

function CalendarPage() {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-gradient-linear">
        <header>
          <nav>
            <NavbarHome />
          </nav>
        </header>
        <main>
          <CalendarMain />
        </main>
        <footer>
          <FooterHome />
        </footer>
      </div>
    </>
  );
}

export { CalendarPage };
