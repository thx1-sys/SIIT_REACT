import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InscriptionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-8 w-8/10 m-auto">
      <h2 className="text-2xl font-bold mb-4">Inscripción</h2>
      <div className="h-40vh grid grid-cols-3 gap-8">
        <div className="col-span-2 h-full">
          <div className="h-full bg-gradient-linear rounded-lg shadow p-6 transform transition duration-500 scale-100 hover:scale-105 opacity-90 hover:opacity-100 text-white grid items-center">
            <p className="mb-4">
              Para realizar tu inscripción, debes seguir los siguientes pasos:
            </p>
            <ol className="list-decimal pl-6 space-y-2 opacity-70">
              <li>Ingresa a tu cuenta en el sistema de control escolar.</li>
              <li>
                Selecciona la opción de <strong>"Inscripción"</strong> en el
                botón o en la barra de navegación.
              </li>
              <li>Revisa y actualiza tus datos personales.</li>
              <li>Realiza el pago correspondiente.</li>
              <li>Imprime tu comprobante de reinscripción.</li>
            </ol>
            <button
              onClick={() => navigate("/insciption")}
              class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f5f7fa] before:to-[#c3cfe2] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black"
            >
              Inscripción
            </button>
          </div>
        </div>
        <div className=" transform transition duration-500 scale-100 hover:scale-105 opacity-9 hover:opacity-100 rounded-lg items-center justify-center flex hover:bg-transparent">
          <img
            className="w-72 object-cover"
            src="../../src/assets/images/Inscripción.png"
            alt="Imagen de correo electrónico"
          />
        </div>
      </div>
    </section>
  );
};

export { InscriptionSection };
