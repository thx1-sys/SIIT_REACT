import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDashAdmin } from "../components/Header/HeaderDashAdmin";
import { Footer } from "../components/Footer/Footer";
import { SectionNewNotice } from "../components/Section/SectionNewNotice";

const AdminNewNoticeMain = () => {
  return (
    <>
      <HeaderDashAdmin />
      <SectionNewNotice />
      <Footer />
    </>
  );
};

export { AdminNewNoticeMain };
