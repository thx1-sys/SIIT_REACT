import React from "react";

const SectionNote = () => (
  <div className=" w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16">
    <div className="overflow-hidden border border-gray-300 py-8 px-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold">Calificaciones Parciales</h1>
        <p className="text-gray-700 ">Enero - Junio 2024</p>
      </div>
      <div className="overflow-x-auto">
        <table className="bg-white table-auto text-center py-4 border border-gray-400 divide-y divide-gray-200 w-full">
          <thead className="bg-gradient-linear text-white">
            <tr className="transform transition duration-500 hover:bg-itd-blue">
              <th className="font-bold p-4">Materia</th>
              <th className="font-bold">Grupo</th>
              <th className="font-bold">Calificaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                ACA0910 TALLER DE INVESTIGACION II
              </td>
              <td className="border-r border-gray-400">Grupo 8Y</td>
              <td className="border-r border-gray-400">87, 96, 95</td>
            </tr>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                AEB1055 PROGRAMACION WEB
              </td>
              <td className="border-r border-gray-400">Grupo 8Y</td>
              <td className="border-r border-gray-400">100, 100, 100</td>
            </tr>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                SCA1002 ADMINISTRACION DE REDES
              </td>
              <td className="border-r border-gray-400">Grupo 8YB</td>
              <td className="border-r border-gray-400">78, 100, 100, 100</td>
            </tr>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                SCC1019 PROGRAMACION LOGICA Y FUNCIONAL
              </td>
              <td className="border-r border-gray-400">Grupo 8Y</td>
              <td className="border-r border-gray-400">100</td>
            </tr>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                SEF2202 CYBEROPS1
              </td>
              <td className="border-r border-gray-400">Grupo 7SI</td>
              <td className="border-r border-gray-400">100</td>
            </tr>
            <tr className="hover:bg-gray-200 transform transition duration-500">
              <td className="border-r border-gray-400 p-4">
                SEF2203 SEGURIDAD EN REDES 1
              </td>
              <td className="border-r border-gray-400">Grupo 8S1</td>
              <td className="border-r border-gray-400">
                85, 74, 90, 80, 82, 82
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-100px-6 py-4 ml-8">
        <p className="text-gray-600">
          Alumno: LEONARDO DAVID GUTIERREZ PEREZ
          <br />
          Número de control: 20041249
        </p>
      </div>
    </div>
  </div>
);

export { SectionNote };
