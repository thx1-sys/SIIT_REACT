// SectionKardex.jsx
import React from "react";
import { StudentCardInf } from "../Card/StudentCardInf";

const SectionCalerdar = () => (
  <div className=" w-8/10 min-h-screen m-auto mt-16 text-black px-16 py-16">
    <StudentCardInf title="Horario" />
    <div className="grid gap-6 w-full mt-16 bg-gradient-linear-white py-8 px-8 rounded-lg border border-gray-400 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <table className="bg-white table-auto text-center py-4 border border-gray-400 divide-y divide-gray-200 w-full">
        <thead>
          <tr className="hover:bg-gray-300 transform transition duration-500">
            <th className="font-bold border-r border-gray-400 p-4">Materia</th>
            <th className="font-bold border-r border-gray-400">Grupo</th>
            <th className="font-bold border-r border-gray-400">Créditos</th>
            <th className="font-bold border-r border-gray-400">Lunes</th>
            <th className="font-bold border-r border-gray-400">Martes</th>
            <th className="font-bold border-r border-gray-400">Miércoles</th>
            <th className="font-bold border-r border-gray-400">Jueves</th>
            <th className="font-bold">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200 transform transition duration-500">
            <td className="border-r border-gray-400 p-4">Matemáticas I</td>
            <td className="border-r border-gray-400">A</td>
            <td className="border-r border-gray-400">5</td>
            <td className="border-r border-gray-400">8:00 - 10:00</td>
            <td className="border-r border-gray-400" />
            <td className="border-r border-gray-400">8:00 - 10:00</td>
            <td className="border-r border-gray-400" />
            <td>-</td>
          </tr>
          <tr className="hover:bg-gray-200 transform transition duration-500">
            <td className="border-r border-gray-400 p-4">Programación I</td>
            <td className="border-r border-gray-400">B</td>
            <td className="border-r border-gray-400">4</td>
            <td className="border-r border-gray-400" />
            <td className="border-r border-gray-400">10:00 - 12:00</td>
            <td className="border-r border-gray-400" />
            <td className="border-r border-gray-400">10:00 - 12:00</td>
            <td>-</td>
          </tr>
          {/* Agrega más filas aquí según sea necesario */}
        </tbody>
        <tfoot>
          <tr className="hover:bg-gray-300 transform transition duration-500">
            <td className="font-bold border-r border-gray-400 p-4">
              Total de créditos:
            </td>
            <td className="font-bold border-r border-gray-400" colSpan={7}>
              21
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
);

export { SectionCalerdar };
