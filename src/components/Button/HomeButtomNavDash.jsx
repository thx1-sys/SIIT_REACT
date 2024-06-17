function HomeButtomNavDash({ toggleNav }) {
  return (
    <div className="w-full text-2xl cursor-pointer container-link--top border-b pb-4 border-gray-300">
      <a
        href="/student"
        className="link-sitt--home w-full opacity-90 hover:opacity-100 hover:scale-105 transform transition duration-500"
      >
        <img
          src="../../src/assets/images/LogoITDFullRec.png"
          alt="Escudo del ITD"
          className="w-12 m-auto"
        />
        <p className="text-sm font-bold text-left">
          ITD <br />
          <span className="font-normal">SII Estudiantes</span>
        </p>
      </a>
      <a
        onClick={toggleNav}
        className="grid justify-center items-center opacity-85 hover:opacity-100 hover:scale-110 transform transition duration-500 hover:text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>
    </div>
  );
}

export { HomeButtomNavDash };
