import React from "react";

const CareerCard = ({ imgSrc, altText, title, description, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg  hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <a href={link} className="absolute inset-0 z-10">
        <span className="sr-only">Ver Carrera</span>
      </a>
      <img
        src={imgSrc}
        alt={altText}
        width={450}
        height={300}
        className="object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
      />
      <div className="bg-white p-4 min-h-44">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export { CareerCard };
