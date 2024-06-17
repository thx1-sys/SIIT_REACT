import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDash } from "../components/Header/HeaderDash";
import { WelcomeMain } from "../components/Section/WelcomeMain";
import { StudentNotices } from "../components/Section/StudentNotices";
import { InscriptionSection } from "../components/Section/InscriptionSection";
import { FeedbackSection } from "../components/Section/FeedbackSection";
import { ExtraCurricularSection } from "../components/Section/ExtraCurricularSection";
import { TutoringSection } from "../components/Section/TutoringSection";
import { Footer } from "../components/Footer/Footer";

const HomeStudentMain = () => {
  return (
    <>
      <HeaderDash />
      <WelcomeMain />
      <StudentNotices />
      <InscriptionSection />
      <FeedbackSection />
      <ExtraCurricularSection />
      <TutoringSection />
      <Footer />
    </>
  );
};

export { HomeStudentMain };
