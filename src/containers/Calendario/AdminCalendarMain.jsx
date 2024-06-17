import React, { useState } from "react";
import "../StudentPage.css";
import { HeaderDashAdmin } from "../../components/Header/HeaderDashAdmin";
import { Footer } from "../../components/Footer/Footer";
import { SectionAdmCalendar } from "../../components/Section/SectionAdmCalendar";

const AdminCalendarMain = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionAdmCalendar />
      <Footer />
    </>
  );
};

export { AdminCalendarMain };
