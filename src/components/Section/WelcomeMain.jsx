import React from "react";

const WelcomeMain = () => {
  return (
    <div className="relative shadow-xl animate-slideLeftFadeIn">
      <img
        className="w-full h-50vh object-cover"
        src="../../src/assets/images/Instituto_Tecnologico_de_Durango.jpg"
        alt="Imagen del campus del ITD"
      />
      <div className="absolute inset-0 grid grid-cols-3 items-center justify-start p-10">
        <div className="absolute inset-0 bg-itd-blue opacity-75"></div>
        <div className="text-white text-left space-y-4 w-7/10 col-span-2 z-10">
          <h1 className="text-4xl font-bold">
            <div className="mb-2 opacity-80">Hola 👋​</div>
            <div className="opacity-80">Estudiante del ITD este es el SII</div>
          </h1>
          <p className="text-lg opacity-70">
            Este sitio está diseñado para proporcionar información esencial y
            actualizada a los estudiantes del Instituto Tecnológico de Durango.
            Aquí podrás encontrar detalles sobre el proceso de reinscripción,
            horarios, tutorías obligatorias, actividades extraescolares y
            recomendaciones importantes para el periodo de inscripciones.
            También podrás acceder a la página de altas y bajas y obtener
            información sobre cómo resolver situaciones escolares específicas,
            así como contactarnos con tus sugerencias y quejas para mejorar
            nuestro servicio educativo.
          </p>
        </div>
        <div className="self-center z-10">
          <img
            className="w-72 object-cover transform transition duration-500 scale-100 hover:scale-105 opacity-90 hover:opacity-100"
            src="../../src/assets/images/sticker.webp"
            alt="Imagen del campus del ITD"
          />
        </div>
      </div>
    </div>
  );
};

export { WelcomeMain };
