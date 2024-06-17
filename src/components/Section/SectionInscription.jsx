import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SectionInscription() {
  const [dataState, setDataState] = useState({});
  const studentId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/datastudent/${studentId}`)
      .then((response) => {
        const data = JSON.parse(response.data.body[0].datos_estudiante);
        setDataState(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className=" w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16">
      <h1 className="text-4xl font-extrabold">Inscripción</h1>
      <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div
          class="rounded-lg border bg-card text-card-foreground transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-xl font-semibold leading-none tracking-tight">
              {dataState.nombre}
            </h3>
          </div>
          <div class="p-6 grid gap-2">
            <div class="flex items-center justify-between">
              <span>Fecha y Hora:</span>
              <span>
                {new Date().toLocaleString("es-ES", {
                  day: "numeric",
                  month: "long",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span>Adeudos:</span>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 text-green-500"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 text-yellow-500"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  <path d="m15 5 4 4"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 text-red-500"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 text-blue-500"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span>Estado:</span>
              <div
                class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                data-v0-t="badge"
              >
                {dataState.estado}
              </div>
            </div>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground  transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6 ">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight ">
              Información de Reinscripción
            </h3>
          </div>
          <div class="p-6 grid gap-4">
            <div>
              <h3 class="text-lg font-semibold">Requisitos</h3>
              <ul class="list-disc pl-6 text-sm text-gray-500 dark:text-gray-400">
                <li>Tener todos los adeudos al corriente</li>
                <li>Haber completado la encuesta de satisfacción</li>
                <li>Presentar identificación oficial vigente</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Fechas Importantes</h3>
              <ul class="list-disc pl-6 text-sm text-gray-500 dark:text-gray-400">
                <li>Inicio de reinscripción: 1 de Julio</li>
                <li>Fecha límite: 31 de Julio</li>
                <li>
                  Orden de prioridad: Estudiantes de último año, seguidos por
                  estudiantes de años anteriores
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Adeudos</h3>
              <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4 text-green-500"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span>Biblioteca</span>
                  </div>
                  <span
                    className={
                      dataState.adeudos && dataState.adeudos.Biblioteca === 0
                        ? "text-green-700"
                        : "text-red-500"
                    }
                  >
                    {dataState.adeudos && dataState.adeudos.Biblioteca === 0
                      ? "Ninguno"
                      : "Adeudo"}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span>Escolares</span>
                  </div>
                  <span
                    className={
                      dataState.adeudos && dataState.adeudos.Escolares === 0
                        ? "text-green-700"
                        : "text-red-500"
                    }
                  >
                    {dataState.adeudos && dataState.adeudos.Escolares === 0
                      ? "Ninguno"
                      : "Adeudo"}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4 text-red-500"
                    >
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span>Financieros</span>
                  </div>
                  <span
                    className={
                      dataState.adeudos && dataState.adeudos.Financieros === 0
                        ? "text-green-700"
                        : "text-red-500"
                    }
                  >
                    {dataState.adeudos && dataState.adeudos.Financieros === 0
                      ? "Ninguno"
                      : "Adeudo"}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4 text-blue-500"
                    >
                      <rect
                        width="8"
                        height="4"
                        x="8"
                        y="2"
                        rx="1"
                        ry="1"
                      ></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    <span>Encuesta</span>
                  </div>
                  <span className="text-blue-700">Completada</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Proceso de Reinscripción</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Para reinscribirte, debes seguir los siguientes pasos:
              </p>
              <ol class="list-decimal pl-6 text-sm text-gray-500 dark:text-gray-400">
                <li>Verifica que no tengas adeudos pendientes</li>
                <li>Completa la encuesta de satisfacción</li>
                <li>Agenda tu cita de reinscripción en el calendario</li>
                <li>Presenta tu identificación oficial el día de tu cita</li>
                <li>Realiza el pago correspondiente</li>
              </ol>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-semibold">Total de Inscripción:</span>
              <span className="text-red-500">$ 1.00 MX</span>
            </div>
            <button
              onClick={() => navigate("/2build")}
              class="w-9/10 m-auto bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
              Pagar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export { SectionInscription };
