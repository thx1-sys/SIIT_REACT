import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionKardex } from "../components/Section/SectionKardex";

const KardexMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionKardex />
      <Footer />
    </>
  );
};

export { KardexMain };
