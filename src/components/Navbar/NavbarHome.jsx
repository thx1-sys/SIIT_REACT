import React, { useState } from "react";
import { NavLink, useNavigate, useLocation, matchPath } from "react-router-dom";
import "./NavbarHome.css";

const NavbarHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleMoreOptionsClick = (event) => {
    event.preventDefault();
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <nav className="container-nav--main items-center bg-transparent with-navbar animate-slideDownFadeIn ">
      <a
        href="/"
        className="container-nav--left opacity-60 hover:opacity-100  center-hight hover:font-semibold transform transition duration-500 hover:scale-100"
      >
        <img src="../../src/assets/images/Logo_itd.png" alt="ITD Logo" />
        <p>
          Instituto
          <br />
          Tecnológico de
          <br />
          Durango
        </p>
      </a>
      <div className="center-total text-gray-400 font-extralight text-xl gap-5">
        <NavLink
          to="/"
          className={
            location.pathname === "/"
              ? "font-semibold text-white hover:scale-110 transform transition duration-500"
              : "hover:text-white hover:font-normal hover:scale-105 transform transition duration-500"
          }
        >
          INICIO
        </NavLink>
        <NavLink
          to="/login"
          className={
            location.pathname === "/login"
              ? "font-semibold text-white hover:scale-110 transform transition duration-500"
              : "hover:text-white hover:font-normal hover:scale-105 transform transition duration-500"
          }
        >
          PERFIL
        </NavLink>
        <NavLink
          to="/news"
          className={
            location.pathname === "/news"
              ? "font-semibold text-white hover:scale-110 transform transition duration-500"
              : "hover:text-white hover:font-normal hover:scale-105 transform transition duration-500"
          }
        >
          NOTICIAS
        </NavLink>
        <NavLink
          to="/careers"
          className={
            location.pathname.startsWith("/career")
              ? "font-semibold text-white hover:scale-110 transform transition duration-500"
              : "hover:text-white hover:font-normal hover:scale-105 transform transition duration-500"
          }
        >
          OFERTA ACADÉMICA
        </NavLink>
        <NavLink
          to="/calendar"
          className={
            location.pathname === "/calendar"
              ? "font-semibold text-white hover:scale-110 transform transition duration-500"
              : "hover:text-white hover:font-normal hover:scale-105 transform transition duration-500"
          }
        >
          CALENDARIO
        </NavLink>
        <div className="relative group inline-block">
          <button
            onClick={handleMoreOptionsClick}
            className="hover:text-white text-gray-300 hover:font-normal hover:scale-105  container-more--a gap-1 transform transition duration-500"
          >
            MAS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.10 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.10 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.10l.06 -.10l.057 -.004l12.059 -.002z" />
            </svg>
          </button>
          {showMoreOptions && (
            <ul className="more-options absolute left-0 bg-white bg-opacity-50 w-48 p-4 shadow-lg z-10 hidden group-hover:block border border-gray-400 rounded-lg text-gray-800 backdrop-filter backdrop-blur-lg">
              <li>
                <a
                  href="https://itdurango.edu.mx/#"
                  className="block py-2 hover:font-bold hover:scale-105 transform transition duration-500"
                >
                  Pagina Web
                </a>
              </li>
              <li>
                <a
                  href="https://www.cinformacionitd.org.mx/centro_de_informacion/catalogo-elibro/"
                  className="block py-2 hover:font-bold hover:scale-105 transform transition duration-500"
                >
                  Centro de información
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <div className="center-total">
          <button
            onClick={() => navigate("/login")}
            className="border-button group flex items-center justify-start fill-white w-12 h-12 bg-transparent rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-48 hover:bg-white hover:rounded-lg hover:fill-blue-950 active:translate-x-1 active:translate-y-1"
          >
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-blue-950 text-lg font-normal transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Inicia sesión
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { NavbarHome };
