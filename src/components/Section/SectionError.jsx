import React from "react";
import { BotonAdmin } from "../Button/BotonAdmin";
import { useNavigate } from "react-router-dom";

const SectionError = () => {
  const navigate = useNavigate();

  return (
    <div className="w-9/10 min-h-[80vh] h-auto m-auto flex items-center justify-center sm:py-8">
      <img
        src="../../src/assets/images/build.png"
        alt="Build site ITD"
        className="object-cover rounded-tl-3xl rounded-bl-3xl self-center place-self-center animate-slideRightFadeIn transform transition duration-500 hover:scale-105"
      />
    </div>
  );
};

export { SectionError };
