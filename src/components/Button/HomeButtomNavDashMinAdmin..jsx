function HomeButtomNavDashMinAdmin({ toggleNav }) {
  return (
    <div className="w-full text-2xl cursor-pointer grid items-center justify-center border-b pb-4 border-gray-400">
      <button
        onClick={toggleNav}
        className="w-full opacity-90 hover:opacity-100 hover:scale-105 transform transition duration-500 flex items-center"
      >
        <div className="grid items-center justify-center m-auto mt-8">
          <img
            src="../../src/assets/images/LogoITDFullRec.png"
            alt="Escudo del ITD"
            className="w-12 m-auto"
          />
        </div>
      </button>
    </div>
  );
}

export { HomeButtomNavDashMinAdmin };
