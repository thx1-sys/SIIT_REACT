import { ButtonVer } from "../Button/ButtonVer";
import { ButtonExit } from "../Button/ButtonExit";
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

function NavComponentStudent({ toggleNav }) {
  return (
    <nav className="mt-4 md:mt-0">
      <ButtonVer title="Inicio" href="/student" Icon={Home} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">
        Información Escolar
      </p>
      <ButtonVer title="Datos Escolares" href="/SchoolData" Icon={DateShool} />
      <ButtonVer title="Kardex" href="/kardex" Icon={Notes} />
      <ButtonVer title="Horario" href="/build" Icon={Calendar} />
      <ButtonVer title="Notas de Parcial" href="/1build" Icon={NotesParcial} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Inscripciones</p>
      <ButtonVer title="Inscripción" href="/insciption" Icon={Incription} />
      <ButtonVer title="Materias" href="/subjects" Icon={Math} />
      <ButtonVer title="Grupos Cargados" href="/grup" Icon={Group} />
      <ButtonVer title="Extraescolares" href="/extra" Icon={Deport} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Evaluaciones</p>
      <ButtonVer title="Docente" href="/3build" Icon={Pencil} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Cuenta</p>
      <ButtonExit title="Salir" href="/" Icon={Exit} />
    </nav>
  );
}
export { NavComponentStudent };
