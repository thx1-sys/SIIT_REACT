import React from "react";
import { BotonAdmin } from "../Button/BotonAdmin";
import { useNavigate } from "react-router-dom";

const SectionAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-9/10 min-h-[80vh] h-auto m-auto grid items-center justify-center sm:py-8">
      <div className="flex flex-col items-center justify-center gap-8 animate">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold animate-slideDownFadeIn">
            Bienvenido al Instituto Tecnológico de Durango
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 animate-slideDownFadeIn">
            Nos complace darle la bienvenida a nuestro panel de control
            integrado. Explore las principales funciones para administrar
            eficazmente a sus estudiantes, docentes, materias, noticias y
            avisos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 animate-slideUpFadeIn">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Noticias
              </h3>
              <div className="flex-grow">
                <p>
                  Manténgase al tanto de las últimas noticias y anuncios del
                  instituto.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
              <BotonAdmin
                text="Explorar"
                color="rojo"
                onClick={() => navigate("/adminnew")}
              />
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Avisos
              </h3>
              <div className="flex-grow">
                <p>Revise los avisos importantes y manténgase informado.</p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
              <BotonAdmin text="Explorar" color="verde" />
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Estudiantes
              </h3>
              <div className="flex-grow">
                <p>
                  Realice un seguimiento de las inscripciones, calificaciones y
                  expedientes de los estudiantes.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
              <BotonAdmin text="Explorar" color="amarillo" />
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Docentes
              </h3>
              <div className="flex-grow">
                <p>
                  Administre la información del personal docente, sus licencias
                  y asignaciones.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
              <BotonAdmin text="Explorar" color="azul" />
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Materias
              </h3>
              <div className="flex-grow">
                <p>
                  Planifique programas, horarios y recursos educativos para las
                  materias.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
              <BotonAdmin text="Explorar" color="morado" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionAdmin };
