import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionSubject } from "../components/Section/SectionSubject";
import { SectionPerfil } from "../components/Section/SectionPerfil";

const PerfilStudentMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionPerfil />
      <Footer />
    </>
  );
};

export { PerfilStudentMain };
