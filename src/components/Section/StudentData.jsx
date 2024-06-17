import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentData = () => {
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
    <div className="w-9/10 mx-auto my-8 border border-gray-300 rounded-lg hover:shadow-2xl p-6 space-y-6 transform transition duration-500 hover:scale-105 hover:border hover:border-gray-600">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Información del Estudiante</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-itd-blue text-white px-3 py-1 rounded-full text-sm font-medium transform transition duration-500 hover:scale-105">
            Número de Control: {dataState.numero_control}
          </div>
          <div className="bg-itd-red text-white px-3 py-1 rounded-full text-sm font-medium transform transition duration-500 hover:scale-105">
            Semestre: {dataState.semestre}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">
            Nombre del Estudiante
          </div>
          <div className="text-gray-900  text-lg font-bold">
            {dataState.nombre}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">
            Periodo Escolar
          </div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.periodo_escolar}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">
            Promedio Acumulado
          </div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.promedio_acumulado}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">Carrera</div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.carrera}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">Reticula</div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.reticula}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">CURP</div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.curp}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm font-medium">Especialidad</div>
          <div className="text-gray-900 text-lg font-bold">
            {dataState.especialidad}
          </div>
        </div>
      </div>
    </div>
  );
};

export { StudentData };
