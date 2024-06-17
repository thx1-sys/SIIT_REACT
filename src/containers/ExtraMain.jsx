import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionSubject } from "../components/Section/SectionSubject";
import { SectionExtra } from "../components/Section/SectionExtra";

const ExtraMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionExtra />
      <Footer />
    </>
  );
};

export { ExtraMain };
