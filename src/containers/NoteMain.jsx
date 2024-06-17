import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { SectionNote } from "../components/Section/SectionNote";

const NoteMain = () => {
  return (
    <>
      <HeaderDash />
      <SectionNote />
      <Footer />
    </>
  );
};

export { NoteMain };
