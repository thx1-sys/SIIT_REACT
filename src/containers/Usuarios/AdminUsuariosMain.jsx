import React, { useState } from "react";
import "../StudentPage.css";
import { HeaderDashAdmin } from "../../components/Header/HeaderDashAdmin";
import { Footer } from "../../components/Footer/Footer";
import { SectionAdmCalendar } from "../../components/Section/SectionAdmCalendar";
import { SectionAdminUser } from "../../components/Section/SectionAdminUser";

const AdminUsuariosMain = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionAdminUser />
      <Footer />
    </>
  );
};

export { AdminUsuariosMain };
