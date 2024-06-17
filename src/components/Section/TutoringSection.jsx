import React from "react";
import { Link } from "react-router-dom";

const TutoringSection = () => {
  return (
    <section className="w-8/10 m-auto mt-8 mb-16">
      <h2 className="text-2xl font-bold mb-4">Tutorías Obligatorias</h2>
      <div className="h-35vh grid grid-cols-3 border border-gray-300 text-black rounded-lg p-6 transform transition duration-500 scale-100 hover:scale-105 opacity-90 hover:opacity-100 items-center justify-center hover:border hover:border-gray-300 hover:bg-white hover:shadow-2xl">
        <div className="col-span-2">
          <p className="mb-4">
            Las tutorías obligatorias son un requisito para poder reinscribirte.
            Debes asistir a un mínimo de 4 sesiones durante el semestre.
          </p>
          <ul className="list-disc pl-6 opacity-70 space-y-2">
            <li>Revisa el horario de tutorías en tu departamento.</li>
            <li>Agenda una cita con tu tutor asignado.</li>
            <li>Asiste puntualmente a tus sesiones de tutoría.</li>
            <li>Mantén un registro de tus avances y dudas.</li>
          </ul>
          <Link to="/build">
            <button className="w-[150px] bg-black h-[50px] mt-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f5f7fa] before:to-[#c3cfe2] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black">
              Agendar Tutoría
            </button>
          </Link>
        </div>
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            className="object-contain w-full h-full"
            src="../../src/assets/images/Tutor.png"
            alt="Imagen de correo electrónico"
          />
        </div>
      </div>
    </section>
  );
};

export { TutoringSection };
