import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDashAdmin } from "../components/Header/HeaderDashAdmin";
import { Footer } from "../components/Footer/Footer";
import { SectionAdmNotice } from "../components/Section/SectionAdmNotice";

const AdminNoticePageMain = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionAdmNotice />
      <Footer />
    </>
  );
};

export { AdminNoticePageMain };
