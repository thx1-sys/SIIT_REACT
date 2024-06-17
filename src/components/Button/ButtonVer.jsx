import { useNavigate, useLocation } from "react-router-dom";
import { RowRight } from "../../../src/assets/svg/RowRight";

function ButtonVer({ title, href, Icon }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.includes(href);
  return (
    <button
      onClick={() => navigate(href)}
      className={`flex items-center py-2.5 px-2 hover:text-itd-red transform transition duration-500 hover:opacity-90 text-sm mb-2 ${
        selected ? "text-rose-700 transform transition duration-500" : ""
      }`}
    >
      {selected && <RowRight className="mr-4" />}
      {Icon && (
        <div className="font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
      <p className="grid justify-center items-center">{title}</p>
    </button>
  );
}

export { ButtonVer };
