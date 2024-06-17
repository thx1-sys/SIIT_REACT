import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ExtraCurricularSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-8/10 m-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Actividades Extraescolares</h2>
      <div className="h-35vh grid grid-cols-3 bg-gradient-linear-blue text-white rounded-lg p-6 transform transition duration-500 scale-100 hover:scale-105 opacity-90 hover:opacity-100 items-center justify-center hover:shadow-xl">
        <div className="col-span-2">
          <p className="mb-4">
            PARA LOS ALUMNOS DE 1 AL 5 SEMESTRE ES OBLIGATORIO CUBRIR POR LO
            MENOS 2 ACTIVIDADES EXTRAESCOLARES DURANTE SU ESTANCIA EN EL
            TECNOLÓGICO.
          </p>
          <ul className="list-disc pl-6 opacity-70 space-y-2">
            <li>
              LA INSCRPCIÓN A ALGUNA ACTIVIDAD EXTRAESCOLAR (DEPORTIVA O
              CULTURAL) LO PUEDEN HACER EN EL MENÚ INSCRIPCIONES, SELECCIONANDO
              LA OPCIÓN EXTRAESCOLAR.
            </li>
            <li>
              O BIEN, ACUDIR AL DEPARTAMENTO DE ACTIVIDADES EXTRAESCOLARES DEL
              ITD.
            </li>
          </ul>
          <button
            onClick={() => navigate("/extra")}
            class="w-[150px] bg-black h-[50px] mt-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f5f7fa] before:to-[#c3cfe2] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black"
          >
            Inscripción
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            className="object-contain w-full h-full"
            src="../../src/assets/images/balon.png"
            alt="Imagen de actividades extraescolares"
          />
        </div>
      </div>
    </section>
  );
};

export { ExtraCurricularSection };
