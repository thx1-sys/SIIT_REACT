import { NavbarHome } from "../Navbar/NavbarHome";
import "./HeaderInfoDisplay.css";

const HeaderInfoDisplay = () => {
  return (
    <>
      <div>
        <img
          src="../../src/assets/images/Uni1_Campus_View.png"
          alt="ITD Foto instalaciones."
          className="conf-background w-full h-screen object-cover object-center absolute"
        />
        <div className="conf-background absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      </div>
      <NavbarHome />
    </>
  );
};

export { HeaderInfoDisplay };
