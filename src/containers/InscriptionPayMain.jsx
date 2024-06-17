import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionPay } from "../components/Section/SectionPay";

const InscriptionPayMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionPay />
      <Footer />
    </>
  );
};

export { InscriptionPayMain };
