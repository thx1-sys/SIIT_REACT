import React from "react";

const SectionInfCarr = () => {
  return (
    <>
      <div className="w-full px-32 h-full grid grid-cols-4 justify-center items-center m-auto text-center text-white font-light gap-8 text-base animate-slideUpFadeIn bg-gradient-linear">
        <p>
          <span className="font-semibold">Oferta académica</span>
          <br />
          Ofrecemos 15 carreras en nuestra
          <br />
          institución.
        </p>
        <p>
          <span className="font-semibold">Docentes</span>
          <br />
          Respaldadas por más de 200 docentes
          <br />
          altamente capacitados.
        </p>
        <p>
          <span className="font-semibold">Estudiantes</span>
          <br />
          Actualmente contamos con más de 4,600
          <br />
          estudiantes.
        </p>
        <p>
          <span className="font-semibold">Aulas</span>
          <br />
          Aulas altamente equipadas con los recursos
          <br />
          necesarios.
        </p>
      </div>
    </>
  );
};

export { SectionInfCarr };
