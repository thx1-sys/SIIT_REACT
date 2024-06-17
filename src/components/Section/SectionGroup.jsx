// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SectionGroup = () => {
//   const [groups, setGroups] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/grupos/")
//       .then((response) => {
//         if (response.data.error === false) {
//           setGroups(response.data.body);
//         }
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   }, []);

//   return (
//     <div className="w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16 grid items-center justify-center">
//       <div class="w-full mx-auto py-12 grid grid-cols-1 gap-8 overflow-auto">
//         <div class="grid grid-cols-1 gap-8">
//           <div class="grid grid-cols-1 items-center justify-between">
//             <h1 class="text-3xl font-bold">Grupos cargados al periodo</h1>
//             <p className="font-light text-gray-500 mt-4 text-xl">
//               ENERO-JUNIO/2024
//             </p>
//           </div>
//           <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {groups.map((group) => (
//               <div
//                 class="rounded-lg border bg-card text-card-foreground shadow-sm"
//                 data-v0-t="card"
//                 key={group.id}
//               >
//                 <div class="flex flex-col space-y-1.5 p-6">
//                   <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
//                     {group.Grupo}
//                   </h3>
//                   <p class="text-sm text-muted-foreground">
//                     Descripción del {group.Grupo}
//                   </p>
//                 </div>
//                 <div class="p-6">
//                   <div class="flex flex-col gap-2">
//                     <div class="flex items-center justify-between">
//                       <span class="font-medium">Código de Materia:</span>
//                       <span class="text-gray-500">{group.CodigoMateria}</span>
//                     </div>
//                     <div class="flex items-center justify-between">
//                       <span class="font-medium">Materia:</span>
//                       <span class="text-gray-500">{group.Materia}</span>
//                     </div>
//                     <div class="flex items-center justify-between">
//                       <span class="font-medium">Semestre:</span>
//                       <span class="text-gray-500">{group.Semestre}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="items-center p-6 flex justify-end">
//                   <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//                     Ver Detalles
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { SectionGroup };

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";

const SectionGroup = () => {
  const [sections, setSections] = useState([]);
  const [page, setPage] = useState(1);
  const sectionsPerPage = 12;
  const firstSectionRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openModal = (section) => {
    setCurrentSection(section);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/grupos/") // Replace with your API endpoint
      .then((response) => {
        if (response.data.error === false) {
          // Create a new reversed array
          const reversedData = [...response.data.body].reverse();
          setSections(reversedData);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  useEffect(() => {
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  // Calculate the range of sections for the current page
  const indexOfLastSection = page * sectionsPerPage;
  const indexOfFirstSection = indexOfLastSection - sectionsPerPage;
  const currentSections = sections.slice(
    indexOfFirstSection,
    indexOfLastSection
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      width: "80%",
      maxWidth: "500px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div className="w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16 grid items-center justify-center">
      <div class="w-full mx-auto py-12 grid grid-cols-1 gap-8 overflow-auto">
        <div class="grid grid-cols-1 gap-8">
          <div class="grid grid-cols-1 items-center justify-between animate-slideDownFadeIn">
            <h1 ref={firstSectionRef} class="text-4xl font-bold">
              Grupos cargados
            </h1>
            <p className="font-light text-gray-500 mt-4 text-xl">
              ENERO-JUNIO/2024
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentSections.map((section) => (
              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm transform transition duration-500 hover:scale-105 hover:shadow-xl animate-slideUpFadeIn"
                data-v0-t="card"
                key={section.id}
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    {section.Grupo}
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Descripción del {section.Grupo}
                  </p>
                </div>
                <div class="p-6">
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <span class="font-medium">Código de Materia:</span>
                      <span class="text-gray-500">{section.CodigoMateria}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="font-medium mr-4">Materia:</span>
                      <span class="text-gray-500 line-clamp-1">
                        {section.Materia}
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="font-medium">Semestre:</span>
                      <span class="text-gray-500">{section.Semestre}</span>
                    </div>
                  </div>
                </div>
                <div class="items-center p-6 flex justify-end">
                  <button
                    onClick={() => openModal(section)}
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-itd-blue hover:text-white"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 items-center text-xl">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
        >
          &lt;
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`h-12 w-12 mx-1 px-3 py-2 border rounded-full ${
              num + 1 === page
                ? "bg-itd-blue text-white transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
                : "bg-white text-itd-blue transform transition duration-500 hover:scale-105 hover:bg-blue-700 hover:text-white"
            }`}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
        >
          &gt;
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Section Details"
        style={customStyles}
      >
        {currentSection && (
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl"
            data-v0-t="card"
          >
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Información del curso
              </h3>
              <span className="m4">{currentSection.Grupo}</span>
            </div>
            <div class="p-6 grid gap-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h3 class="text-lg font-medium">Nombre del curso</h3>
                  <p>Introducción a la Ciencia de la Computación</p>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Código del curso</h3>
                  <p>{currentSection.CodigoMateria}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h3 class="text-lg font-medium">Profesor</h3>
                  <p>{currentSection.Profesor}</p>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Semestre</h3>
                  <p>{currentSection.Semestre}</p>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Dias</h3>
                </div>
                <div></div>
                <div>
                  <h3 class="text-lg font-normal">Lunes</h3>
                  <p className="font-light">{currentSection.Lunes}</p>
                </div>
                <div>
                  <h3 class="text-lg font-normal">Martes</h3>
                  <p className="font-light">{currentSection.Martes}</p>
                </div>
                <div>
                  <h3 class="text-lg font-normal">Miercoles</h3>
                  <p className="font-light">{currentSection.Miercoles}</p>
                </div>
                <div>
                  <h3 class="text-lg font-normal">Jueves</h3>
                  <p className="font-light">{currentSection.Jueves}</p>
                </div>
                <div>
                  <h3 class="text-lg font-normal">Viernes</h3>
                  <p className="font-light">{currentSection.Viernes}</p>
                </div>
              </div>
            </div>
          </div>
          // <div>
          //   <h2>{currentSection.Grupo}</h2>
          //   <p>{currentSection.Materia}</p>
          //   <p>{currentSection.CodigoMateria}</p>
          //   <p>{currentSection.Profesor}</p>
          //   <p>{currentSection.Semestre}</p>
          //   {/* ...display other details... */}
          // </div>
        )}
      </Modal>
    </div>
  );
};

export { SectionGroup };
