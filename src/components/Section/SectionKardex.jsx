import React, { useEffect, useState } from "react";
import { StudentCardInf } from "../Card/StudentCardInf";

const SectionKardex = () => {
  const [calificaciones, Setcalificaciones] = useState([]);
  const studentId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      fetch(`http://localhost:4000/api/datastudent/${studentId}`)
        .then((response) => response.json())
        .then((data) => {
          // data is the JSON response from your API
          // You can now access properties of the response like this:
          const error = data.error;
          const status = data.status;
          const body = data.body;

          // body is an array, so you can loop over it like this:
          body.forEach((item) => {
            const id = item.id;
            const usuario_id = item.usuario_id;
            const datos_estudiante = JSON.parse(item.datos_estudiante);
            const horario = item.horario;
            const calificaciones = JSON.parse(item.calificaciones);
            const notas = item.notas;
            const carga = JSON.parse(item.carga);
            Setcalificaciones(calificaciones);
          });
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error:", error);
        });
    };

    fetchData(); // Llama a la función aquí
  }, []);

  console.log(calificaciones);

  return (
    <div className=" w-8/10 min-h-screen m-auto mt-16 text-black px-16 py-16">
      <StudentCardInf title="Informacion de calificaciones" />
      <div className="grid gap-6 w-full mt-16 border border-gray-300 py-8 px-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600">
        {calificaciones.kardex &&
          calificaciones.kardex.map((kardexItem, index) =>
            kardexItem.periodos.map((periodo, periodoIndex) => (
              <div key={`${index}-${periodoIndex}`}>
                <h2 className="text-xl font-bold mb-4">{periodo.periodo}</h2>
                <div className="overflow-hidden">
                  <table className="bg-white table-auto text-center py-4 border border-gray-400 divide-y divide-gray-200 w-full">
                    <thead>
                      <tr className="hover:bg-gray-300 transform transition duration-500">
                        <th className="font-bold border-r border-gray-400 p-4">
                          Curso #
                        </th>
                        <th className="font-bold border-r border-gray-400">
                          Nombre del Curso
                        </th>
                        <th className="font-bold border-r border-gray-400">
                          Créditos
                        </th>
                        <th className="font-bold border-r border-gray-400">
                          Calificación
                        </th>
                        <th className="font-bold border-r border-gray-400">
                          Evaluación
                        </th>
                        <th className="font-bold">Observaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {periodo.materias.map((materia, materiaIndex) => (
                        <tr
                          key={`${index}-${periodoIndex}-${materiaIndex}`}
                          className="hover:bg-gray-200 transform transition duration-500"
                        >
                          <td className="border-r border-gray-400 p-4">
                            {materia.no}
                          </td>
                          <td className="border-r border-gray-400">
                            {materia.materia}
                          </td>
                          <td className="border-r border-gray-400">
                            {materia.créditos}
                          </td>
                          <td className="border-r border-gray-400">
                            {materia.calificación}
                          </td>
                          <td className="border-r border-gray-400">
                            {materia.evaluación || "N/A"}
                          </td>
                          <td>{materia.observaciones || "N/A"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export { SectionKardex };
