// import React from "react";
// import { mate } from "../../data/mate";

// const StudentDataCareer = () => {
//   return (
//     <div>
//       {mate.matriz.map((semestre, index) => (
//         <div key={index}>
//           <h2>Semestre {index + 1}</h2>
//           {semestre.map((materia, i) =>
//             materia ? (
//               <div key={i}>
//                 <p>Nombre: {materia.nombre_materia}</p>
//                 <p>Código: {materia.codigo_materia}</p>
//               </div>
//             ) : null
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export { StudentDataCareer };

import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDataCareer = () => {
  const [dataState, setDataState] = useState([]);
  const bgTransparent = "bg-transparent";
  const studentId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/datastudent/${studentId}`)
      .then((response) => {
        const data = JSON.parse(response.data.body[0].carga);
        setDataState(data.matriz);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  // Find the maximum number of subjects in a semester
  const maxSubjects = Math.max(...dataState.map((subjects) => subjects.length));

  function getColor(estado) {
    switch (estado) {
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-blue-500";
      case 3:
        return "bg-purple-600";
      default:
        return "bg-black";
    }
  }

  return (
    <div className="grid grid-cols-9 gap-4 w-9/10 text-center m-auto">
      {dataState.map((semestre, index) => (
        <div key={index}>
          <h2 className="font-bold bg-gradient-linear text-white rounded-md py-2 mb-4 transform transition duration-500 hover:scale-105 animate-slideUpFadeIn">
            Semestre {index + 1}
          </h2>
          {semestre.map((materia, i) =>
            materia ? (
              <p
                className={`h-32 text-white ${
                  materia.nombre_materia === "x"
                    ? bgTransparent
                    : getColor(materia.estado)
                }  flex items-center justify-center rounded-md mb-4 text-sm transform transition duration-500 hover:scale-105 p-4 hover:shadow-2xl animate-slideUpFadeIn`}
                key={i}
              >
                {materia.nombre_materia}
              </p>
            ) : (
              <div className="h-32 mb-4"></div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export { StudentDataCareer };
