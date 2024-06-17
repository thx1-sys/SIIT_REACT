import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonVerMin } from "../Button/ButtonVerMin";
import { ButtonExitMin } from "../Button/ButtonExitMin";
import { Home } from "../../../src/assets/svg/Home";
import { DateShool } from "../../../src/assets/svg/DateShool";
import { Notes } from "../../../src/assets/svg/Notes";
import { Calendar } from "../../../src/assets/svg/Calendar";
import { NotesParcial } from "../../../src/assets/svg/NotesParcial";
import { Incription } from "../../../src/assets/svg/Incription";
import { Math } from "../../../src/assets/svg/Math";
import { Group } from "../../../src/assets/svg/Group";
import { Deport } from "../../../src/assets/svg/Deport";
import { Pencil } from "../../../src/assets/svg/Pencil";
import { Exit } from "../../../src/assets/svg/Exit";

function NavComponentStudentMin({ toggleNav }) {
  const [areIconsVisible, setIconsVisible] = useState(true);

  const toggleIcons = () => {
    setIconsVisible(!areIconsVisible);
  };

  return (
    <nav className="my-4">
      <button onClick={toggleIcons} className="sm:hidden block">
        <ButtonVerMin
          title="Inicio"
          href="/student"
          Icon={Home}
          className="sm:flex"
        />
      </button>
      {areIconsVisible && (
        <>
          <ButtonVerMin
            title="Inicio"
            href="/student"
            Icon={Home}
            className="sm:flex"
          />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <div className="text-xs text-gray-400 uppercase mb-2"></div>
          <ButtonVerMin
            title="Datos Escolares"
            href="/SchoolData"
            Icon={DateShool}
            className="sm:flex"
          />
          <ButtonVerMin
            title="Kardex de calificaciones"
            href="/kardex"
            Icon={Notes}
            className="sm:flex"
          />
          <ButtonVerMin href="/build" Icon={Calendar} className="sm:flex" />
          <ButtonVerMin
            href="/1build"
            Icon={NotesParcial}
            className="sm:flex"
          />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <div className="text-xs text-gray-400 uppercase mb-2"></div>
          <ButtonVerMin
            href="/insciption"
            Icon={Incription}
            className="sm:flex"
          />
          <ButtonVerMin href="/subjects" Icon={Math} className="sm:flex" />
          <ButtonVerMin href="/grup" Icon={Group} className="sm:flex" />
          <ButtonVerMin href="/extra" Icon={Deport} className="sm:flex" />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <div className="text-xs text-gray-400 uppercase mb-2"></div>
          <ButtonVerMin href="/3build" Icon={Pencil} className="sm:flex" />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <div className="text-xs text-gray-400 uppercase mb-2"></div>
          <ButtonExitMin href="/" Icon={Exit} className="sm:flex" />
        </>
      )}
    </nav>
  );
}

export { NavComponentStudentMin };
