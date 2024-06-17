import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { Footer } from "../components/Footer/Footer";
import { StudentData } from "../components/Section/StudentData";
import { StudentDataCareer } from "../components/Section/StudentDataCarrer";
import { Colors } from "../components/Section/Colors";

const DataMain = () => {
  return (
    <>
      <HeaderDash />
      <StudentData />
      <StudentDataCareer />
      <Colors />
      <Footer />
    </>
  );
};

export { DataMain };
