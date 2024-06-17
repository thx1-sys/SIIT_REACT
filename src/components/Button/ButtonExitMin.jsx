import Cookies from "js-cookie";

function ButtonExitMin({ title, href, Icon }) {
  const handleClick = (event) => {
    event.preventDefault();
    Cookies.remove("isAuthenticated", { path: "/" });
    // Agrega aquí las llamadas a Cookies.remove para las otras cookies que quieras eliminar
    window.location.href = href;
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="w-full flex items-center justify-center py-4 px-2 rounded hover:text-red-600 hover:font-bold transform transition duration-500 hover:opacity-90 text-sm mb-1"
    >
      {Icon && (
        <div className="mr-2 ml-1 font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
    </a>
  );
}

export { ButtonExitMin };
