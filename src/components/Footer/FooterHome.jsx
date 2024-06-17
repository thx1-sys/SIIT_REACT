import React from "react";

const FooterHome = () => {
  return (
    <footer className="w-screen h-2/10 color-footer text-md grid grid-cols-1 py-4">
      <div className="w-9/10 m-auto grid grid-cols-2 items-center">
        <div className="text-left text-white grid items-center">
          <div>
            <span className="font-bold">Dirección</span>
            <br />
            <span>
              Felip Pescador 1830 Ote. Col. Nueva Vizcaya Durango, Dgo. México
              <br />
              C.P. 34080
              <br />
            </span>
            <br />
            <span className="font-bold">Contacto</span>
            <br />
            (618) 8290900
          </div>
        </div>
        <div className="grid grid-cols-4 items-center">
          <div></div>
          <img
            src="../../src/assets/images/Teg_log.png"
            alt="Logo del instituto tecnológico de México"
            className="justify-self-end"
          />
          <img
            src="../../src/assets/images/Gob_log.png"
            alt="Logo del gobierno de México"
            className="justify-self-end"
          />
          <img
            src="../../src/assets/images/LogoITD_1.png"
            alt="Logo del instituto tecnológico de Durango"
            className="justify-self-end"
          />
        </div>
      </div>
    </footer>
  );
};

export { FooterHome };
