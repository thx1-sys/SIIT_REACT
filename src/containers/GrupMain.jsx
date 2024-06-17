import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionGroup } from "../components/Section/SectionGroup";

const GrupMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionGroup />
      <Footer />
    </>
  );
};

export { GrupMain };
