import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionSubject } from "../components/Section/SectionSubject";

const SubjectMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionSubject />
      <Footer />
    </>
  );
};

export { SubjectMain };
