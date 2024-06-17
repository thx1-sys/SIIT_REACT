import React, { useState } from "react";

const Colors = () => {
  return (
    <>
      <div className="my-12 w-6/10 px-16 mx-auto py-12 border border-gray-300 hover:shadow-2xl rounded-lg  transform transition duration-500 hover:scale-105 hover:border hover:border-gray-500">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Estado de Materias
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-green-500" />
            <span>Acreditada</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-blue-500" />
            <span>En curso</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-yellow-500" />
            <span>Cursada sin acreditar</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-purple-500" />
            <span>Prioridad para seleccionar</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-orange-500" />
            <span>En curso especial</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-red-500" />
            <span>Curso especial reprobado</span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-teal-500" />
            <span>En examen especial</span>
          </div>
          <div className="flex items-center gap-3  transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-gray-500" />
            <span>Examen especial reprobado</span>
          </div>
          <div className="flex items-center gap-3  transform transition duration-500 hover:scale-105">
            <div className="w-5 h-5 rounded-full bg-indigo-500" />
            <span>No permitida hasta avance</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Colors };
