import React, { useEffect, useState } from "react";

function SectionSubject() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16 grid items-center justify-center">
      <div className="mx-auto max-w-md space-y-6 py-12">
        <div className="space-y-2 text-center animate-slideUpFadeIn">
          <h1 className="text-2xl font-bold">Selección de Materias</h1>
          <p className="text-gray-500 ">
            {currentDate.toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            - {currentDate.toLocaleTimeString()}
          </p>
        </div>
        <div className="rounded-md border border-red-500 bg-red-50 p-4 text-center text-red-900 animate-slideUpFadeIn">
          <p>
            Lo siento, ya se ha cerrado el periodo de selección de materias.
          </p>
          <p>Por favor, intenta de nuevo más tarde.</p>
        </div>
        <div className="rounded-md border border-gray-200 bg-white p-4 text-center text-gray-500 animate-slideUpFadeIn">
          <p>NO TIENES FECHA ASIGNADA AUN</p>
        </div>
      </div>
    </div>
  );
}

export { SectionSubject };
