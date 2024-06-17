import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionInscription } from "../components/Section/SectionInscription";

const InscriptionMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionInscription />
      <Footer />
    </>
  );
};

export { InscriptionMain };
