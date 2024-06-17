import { ButtonVer } from "../Button/ButtonVer";
import { ButtonExit } from "../Button/ButtonExit";
import { Home } from "../../../src/assets/svg/Home";
import { DateShool } from "../../../src/assets/svg/DateShool";
import { Notes } from "../../../src/assets/svg/Notes";
import { Calendar } from "../../../src/assets/svg/Calendar";
import { NotesParcial } from "../../../src/assets/svg/NotesParcial";
import { Incription } from "../../../src/assets/svg/Incription";
import { Math } from "../../../src/assets/svg/Math";
import { UsersGroup } from "../../../src/assets/svg/UsersGroup";
import { Warning } from "../../../src/assets/svg/Warning";
import { News } from "../../../src/assets/svg/News";
import { Exit } from "../../../src/assets/svg/Exit";

function NavComponentAdmin({ toggleNav }) {
  return (
    <nav className="flex flex-col justify-between mt-4 mb-8 h-full">
      <div>
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Inicio</p>
          <ButtonVer title="Inicio" href="/adminhome" Icon={Home} />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Administración</p>
          <ButtonVer title="Noticias" href="/adminnew" Icon={News} />
          <ButtonVer title="Avisos" href="/adminwar" Icon={Warning} />
          <ButtonVer title="Calendario" href="/admincalendar" Icon={Calendar} />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <p className="text-xs text-gray-400 uppercase mb-2">Personal</p>
          <ButtonVer title="Usuarios" href="/adminuser" Icon={UsersGroup} />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase mb-2">Cuenta</p>
        <ButtonExit title="Salir" href="/" Icon={Exit} />
      </div>
    </nav>
  );
}

export { NavComponentAdmin };
