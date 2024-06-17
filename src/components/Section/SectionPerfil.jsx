import React, { useEffect, useState } from "react";
import { BotonAdmin } from "../Button/BotonAdmin";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonNotice } from "../Button/ButtonNotice";
import axios from "axios";

const SectionPerfil = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtiene el id desde los parámetros de la ruta
  const [userData, setUserData] = useState(null);
  const studentId = localStorage.getItem("userId");
  const [newURLIMG, setNewURLIMG] = useState("");

  useEffect(() => {
    // Define la función asincrónica para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/usuarios/${studentId}`
        );
        const data = await response.json();

        if (!data.error) {
          setUserData(data.body);
        } else {
          console.error("Error al obtener los datos del usuario:", data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [id]); // Dependencia del efecto: se ejecuta de nuevo cuando el id cambia

  const insertImage = async () => {
    try {
      const urlPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
      const isValidUrl = urlPattern.test(newURLIMG);

      if (!isValidUrl) {
        console.error("Invalid image URL");
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/api/usuarios/",
        {
          ...userData[0],
          imagen_perfil: newURLIMG,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (!data.error) {
        console.log("Datos enviados con éxito:", data);
        window.location.reload();
      } else {
        console.error("Error al enviar los datos:", data);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className=" w-9/10 min-h-[80vh] h-auto m-auto grid items-center justify-center sm:py-8">
      {/* Aquí puedes renderizar los datos del usuario, por ejemplo: */}
      {userData && (
        <div className="w-full grid grid-cols-6 gap-12">
          <h1 className="text-4xl font-extrabold col-span-6 text-left">
            Información del perfil
          </h1>
          <div className="col-span-3">
            <p className="font-bold text-xl mb-4">Nombre</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData[0].nombre}
              readOnly
            />
          </div>
          <div className="col-span-3">
            <p className="font-bold text-xl mb-4">Apellido Paterno</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData[0].apellido_paterno}
              readOnly
            />
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xl mb-4">Apellido Materno</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData[0].apellido_materno}
              readOnly
            />
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xl mb-4">Correo</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData[0].correo}
              readOnly
            />
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xl mb-4">Cuenta</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData[0].tipo_de_usuario}
              readOnly
            />
          </div>
          <div className="col-span-6 ">
            <p className="font-bold text-xl mb-4">Imagen de perfil</p>
            <div className="grid m-auto items-center justify-center">
              <img
                className="rounded-full w-64 h-64 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
                src={
                  userData[0].imagen_perfil
                    ? userData[0].imagen_perfil
                    : "https://www.latercera.com/resizer/9Yo9YIAEMo7t9hQTNUgPa9mgE-8=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg"
                }
                alt="Imagen de perfil"
              />
            </div>
          </div>
          <div className="col-span-6">
            <p className="font-bold text-xl mb-4">Url Imagen</p>
            <input
              className="w-full rounded-xl border border-gray-400 p-4 text-gray-600 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
              type="text"
              value={userData ? userData.imagen_perfil : ""}
              onChange={(e) => setNewURLIMG(e.target.value)}
            />
          </div>
          <div></div>
          <div></div>
          <div className="col-span-2 mb-16">
            <ButtonNotice
              className="w-full h-12"
              color="blue"
              text="Guardar"
              onClick={insertImage}
            />
          </div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export { SectionPerfil };
