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
import { UsersGroup } from "../../../src/assets/svg/UsersGroup";
import { Warning } from "../../../src/assets/svg/Warning";
import { News } from "../../../src/assets/svg/News";
import { Exit } from "../../../src/assets/svg/Exit";

function NavComponentAdminMin({ toggleNav }) {
  return (
    <nav className="flex flex-col justify-between my-4 h-9/10 pb-8">
      <div className="">
        <div>
          <ButtonVerMin title="Inicio" href="/adminhome" Icon={Home} />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
        </div>
        <div>
          <ButtonVerMin title="Noticias" href="/adminnew" Icon={News} />
          <ButtonVerMin title="Avisos" href="/adminwar" Icon={Warning} />
          <ButtonVerMin
            title="Calendario"
            href="/admincalendar"
            Icon={Calendar}
          />
          <div className="border-b border-gray-300 mt-4 mb-2"></div>
          <ButtonVerMin title="Usuarios" href="/adminuser" Icon={UsersGroup} />
        </div>
      </div>
      <ButtonExitMin href="/" Icon={Exit} />
    </nav>
  );
}

export { NavComponentAdminMin };
