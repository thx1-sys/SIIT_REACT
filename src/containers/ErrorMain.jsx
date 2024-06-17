import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionError } from "../components/Section/SectionError";

const ErrorMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionError />
      <Footer />
    </>
  );
};

export { ErrorMain };
