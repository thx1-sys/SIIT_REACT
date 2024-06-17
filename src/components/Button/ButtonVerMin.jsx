import { useNavigate, useLocation } from "react-router-dom";

function ButtonVerMin({ title, href, Icon }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.includes(href);
  return (
    <button
      onClick={() => navigate(href)}
      className={`w-full flex items-center justify-center py-4 px-2 hover:text-itd-red transform transition duration-500 hover:opacity-90 text-sm mb-1 ${
        selected
          ? "text-rose-700 transform transition duration-500 underline"
          : ""
      }`}
    >
      {Icon && (
        <div className="mr-2 ml-1 font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
    </button>
  );
}

export { ButtonVerMin };
