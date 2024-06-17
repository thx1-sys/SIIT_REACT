import "./SectionInf.css";
import { PrimaryButton } from "../Button/PrimaryButton";
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const SectionInf = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container-section--main m-auto">
      <div className="animate-slideLeftFadeIn transform transition duration-500 hover:scale-105">
        <h1 className="mb-8 font-bold text-white text-5xl">
          ¡Bienvenido al Sistema Integral de Información del
          <br />
          Instituto Tecnológico de Durango!
        </h1>
        <p className="mb-4 text-white text-xl">
          Aquí encontrarás todo lo que necesitas para optimizar tu experiencia
          académica y administrativa. <br /> Explora nuestras herramientas y
          recursos para aprovechar al máximo tu estancia en nuestra institución
        </p>
        <p className="text-white text-2xl mt-2 font-semibold mb-4">
          ¡Gracias por fomar parte de nuestra Institución!
        </p>
        <PrimaryButton to="/login" text="Ver más" subtext="Ver más" />
      </div>
      <div className="center-total">
        <img
          src="../../src/assets/images/Pola_mascota_1.png"
          alt="Pola"
          className="w-72 mb-12 animate-slideRightFadeIn transform transition duration-500 hover:scale-110 hover:rotate-12"
        />
      </div>
    </div>
  );
};

export { SectionInf };
