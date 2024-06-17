import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDashAdmin } from "../components/Header/HeaderDashAdmin";
import { Footer } from "../components/Footer/Footer";
import { SectionWarningAdd } from "../components/Section/SectionWarningAdd";

const AdminNewWarningMainAdd = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionWarningAdd />
      <Footer />
    </>
  );
};

export { AdminNewWarningMainAdd };
