import React, { useState } from "react";
import "./StudentPage.css";
import { HeaderDashAdmin } from "../components/Header/HeaderDashAdmin";
import { Footer } from "../components/Footer/Footer";
import { SectionAdmin } from "../components/Section/SectionAdmin";

const AdminMain = () => {
  return (
    <div className="">
      <HeaderDashAdmin />
      <SectionAdmin />
      <Footer />
    </div>
  );
};

export { AdminMain };
