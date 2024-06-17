import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDashAdmin } from "../components/Header/HeaderDashAdmin";
import { Footer } from "../components/Footer/Footer";
import { SectionWarning } from "../components/Section/SectionWarning";

const AdminNewWarningMain = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionWarning />
      <Footer />
    </>
  );
};

export { AdminNewWarningMain };
