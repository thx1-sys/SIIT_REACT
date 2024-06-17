import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentCardInf({ title }) {
  const [dataState, setDataState] = useState({});
  const studentId = localStorage.getItem("userId");

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
    <div className="w-full grid gap-6 border border-gray-300 p-12 rounded-lg  transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="w-fullflex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-600">
          <div>
            <span className="font-medium">Estudiante:</span> {dataState.nombre}
          </div>
          <div>
            <span className="font-medium">Número de Control:</span>{" "}
            {dataState.numero_control}
          </div>
          <div>
            <span className="font-medium">Plan de Estudios:</span>{" "}
            {dataState.reticula}
          </div>
          <div>
            <span className="font-medium">Carrera:</span> {dataState.carrera}
          </div>
          <div>
            <span className="font-medium">Especialidad:</span>{" "}
            {dataState.especialidad}
          </div>
        </div>
      </div>
    </div>
  );
}

export { StudentCardInf };
