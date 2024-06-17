import React, { useEffect, useState } from "react";
import axios from "axios";

const HeaderDashAdmin = () => {
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      console.log("1112");
      // Siempre obtén los datos del usuario del servidor
      axios
        .get(`http://localhost:4000/api/usuarios/${userId}`)
        .then((response) => {
          setUserData(response.data.body[0]);
          console.log("userData", userData);
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.body[0])
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [userId]); // Observa userId para actualizar los datos del usuario cuando cambie

  return (
    <div className="bg-gradient-linear h-10vh py-4 shadow-xl flex items-center">
      <div className="w-9/10 m-auto items-center grid grid-cols-2 justify-center">
        <div className="flex justify-start items-center">
          <img
            className="h-16"
            src="../../src/assets/images/logoITDFull.png"
            alt="Escudo ITD"
          />
          <h1 className="ml-2 text-white font-bold text-xl">
            Instituto Tecnológico de Durango
          </h1>
        </div>
        <div className="justify-self-end">
          <div className="flex justify-end items-center">
            <p className="text-white mr-8">
              ¡Bienvenido al portal web del ITD!{" "}
              <span className="font-semibold">
                {userData ? userData.nombre : "Cargando..."}
              </span>
            </p>
            <a href="">
              <img
                className="rounded-full text-itd-blue shadow-2xl transform transition duration-500 hover:scale-110 hover:rotate-360 w-12 opacity-80 hover:opacity-100"
                src={userData ? userData.imagen_perfil : ""}
                alt="Usuario Perfil"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderDashAdmin };
