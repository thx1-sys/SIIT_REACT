import React, { useState, useEffect } from "react";
import { NavbarHome } from "../components/Navbar/NavbarHome";
import { FooterHome } from "../components/Footer/FooterHome";
import { NewsSection } from "../components/Section/LastNew";
import { LatestNews } from "../components/Section/LatestNews";
import { AllNews } from "../components/Section/AllNews";

function NewsPage() {
  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-gradient-linear">
        <header>
          <nav>
            <NavbarHome />
          </nav>
        </header>
        <main>
          <NewsSection />

          <LatestNews />

          <AllNews />
        </main>
        <footer>
          <FooterHome />
        </footer>
      </div>
    </>
  );
}

export { NewsPage };
