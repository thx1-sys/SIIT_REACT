import { useCookies } from "react-cookie";

function ButtonExit({ title, href, Icon }) {
  const [cookies, setCookie, removeCookie] = useCookies(["isAuthenticated"]); // Add removeCookie here

  const handleExit = () => {
    removeCookie("isAuthenticated");
  };

  return (
    <a
      onClick={handleExit} // Call handleExit when the button is clicked
      href={href}
      className="flex items-center py-2.5 px-2 rounded hover:text-red-600 hover:font-bold transform transition duration-500 hover:opacity-90 text-sm mb-2 cursor-pointer"
    >
      {Icon && (
        <div className="mr-2 ml-1 font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
      <p className="grid justify-center items-center">{title}</p>
    </a>
  );
}

export { ButtonExit };
