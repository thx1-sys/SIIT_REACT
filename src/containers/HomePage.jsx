import React, { useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Header } from "../components/Header/Header";
import { SectionInf } from "../components/Section/SectionInf";
import { FloatButton } from "../components/Button/FloatButton";
import { MainHome } from "../components/Main/MainHome";
import { FloatScrollInf } from "../components/Button/FloatScrollInf";
import { SectionInfCarr } from "../components/Section/SectionInfCarr";
import { NoticeHome } from "../components/Section/NoticeHome";
import CookieCard from "../components/Card/CookieCard";
import "./HomePage.css";

function HomePage() {
  const cookiesAccepted = Cookies.get("cookiesAccepted");

  return (
    <>
      {!cookiesAccepted && <CookieCard />}
      <div>
        <Header />
        <div className="container-main-home m-auto">
          <SectionInf />
        </div>
        <div className="w-screen h-15vh">
          <SectionInfCarr />
        </div>
      </div>
      <main className="bg-gradient-linear-white">
        <div>
          <MainHome />
        </div>
        <div>
          <NoticeHome />
        </div>
      </main>
      <FloatButton />
      <FloatScrollInf />
    </>
  );
}

export { HomePage };
