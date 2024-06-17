import React from "react";
import { NavbarHome } from "../components/Navbar/NavbarHome";
import { FooterHome } from "../components/Footer/FooterHome";
import { CareerCard } from "../components/Card/CareerCard";

const CareersPage = () => {
  return (
    <div className="w-screen h-auto bg-gradient-linear">
      <nav>
        <NavbarHome />
      </nav>
      <main>
        <section className="w-full h-65vh bg-gradient-linear-white flex items-center justify-center shadow-mod animate-slideLeftFadeIn">
          <img
            src="./../src/assets/images/oferta.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </section>
        <section className="w-screen h-auto bg-gradient-linear-white py-28">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center font-yeseva">
            Descubre tus opciones universitarias
          </h1>
          <p className="text-center text-xl mt-4">
            Explora nuestra amplia selección de carreras universitarias y
            encuentra tu camino hacia el éxito.
          </p>

          <div className="w-9/10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-16">
            <CareerCard
              imgSrc="../../src/assets/images/carreras/emp-img.jpg"
              altText="Licenciatura en Administración"
              title="Licenciatura en Administración"
              description="Aprende a liderar y gestionar empresas de éxito."
              link="/career/administracion"
            />

            <CareerCard
              imgSrc="../../src/assets/images/carreras/bio-img.jpg"
              altText="Ingeniería Bioquímica"
              title={
                <>
                  Ingeniería <br /> Bioquímica
                </>
              }
              description="Estudia los procesos químicos que ocurren en los organismos vivos."
              link="/career/bioquimica"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/ele-img.jpg"
              altText="Ingeniería Eléctrica"
              title={
                <>
                  Ingeniería <br /> Eléctrica
                </>
              }
              description="Diseña y desarrolla sistemas eléctricos y electrónicos."
              link="/career/electrica"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/arq-img.webp"
              altText="Arquitectura"
              title="Arquitectura"
              description="Diseña y crea espacios funcionales y estéticamente agradables."
              link="/career/arquitectura"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/civ-img.jpg"
              altText="Ingeniería Civil"
              title={
                <>
                  Ingeniería <br /> Civil
                </>
              }
              description="Planifica, diseña y construye infraestructura para el desarrollo de la sociedad."
              link="/career/civil"
            />

            <CareerCard
              imgSrc="../../src/assets/images/carreras/emp-img.jpeg"
              altText="Ingeniería en Gestión Empresarial"
              title="Ingeniería en Gestión Empresarial"
              description="Combina conocimientos de ingeniería y administración para gestionar empresas de manera eficiente."
              link="/career/gestion"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/inf-img.jpeg"
              altText="Ingeniería Informática"
              title={
                <>
                  Ingeniería <br /> Informática
                </>
              }
              description="Diseña y desarrolla sistemas informáticos avanzados."
              link="/career/informatica"
            />

            <CareerCard
              imgSrc="../../src/assets/images/carreras/mec-img.webp"
              altText="Ingeniería Mecatrónica"
              title={
                <>
                  Ingeniería <br /> Mecatrónica
                </>
              }
              description="Combina la mecánica, la electrónica y la informática para crear sistemas automatizados."
              link="/career/mecatronica"
            />
            <CareerCard
              imgSrc=".../../src/assets/images/carreras/ind-img.jpeg"
              altText="Ingeniería Industrial"
              title={
                <>
                  Ingeniería <br /> Industrial
                </>
              }
              description="Optimiza procesos y sistemas para mejorar la eficiencia y la productividad."
              link="/career/industrial"
            />

            <CareerCard
              imgSrc="../../src/assets/images/carreras/mec-img.webp"
              altText="Ingeniería Mecánica"
              title={
                <>
                  Ingeniería <br /> Mecánica
                </>
              }
              description="Diseña, desarrolla y mantiene sistemas mecánicos."
              link="/career/mecanica"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/qui-img.jpg"
              altText="Ingeniería Química"
              title={
                <>
                  Ingeniería <br /> Química
                </>
              }
              description="Estudia y aplica los principios de la química para desarrollar procesos y productos."
              link="/career/quimica"
            />

            <CareerCard
              imgSrc="../../src/assets/images/carreras/com-img.jpeg"
              altText="Ingeniería en Sistemas Computacionales"
              title="Ingeniería en Sistemas Computacionales"
              description="Diseña y desarrolla sistemas informáticos avanzados."
              link="/career/jomicool"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/con-img.jpg"
              altText="Ingeniería en Semiconductores"
              title="Ingeniería en Semiconductores"
              description="Diseña y desarrolla dispositivos semiconductores avanzados."
              link="/career/semiconductores"
            />
            <CareerCard
              imgSrc="../../src/assets/images/carreras/elc-img.jpeg"
              altText="Ingeniería en Electrónica"
              title="Ingeniería en Electrónica"
              description="Diseño,desarrollo y aplicación de dispositivos y sistemas electrónicos."
              link="/career/electronica"
            />
          </div>
        </section>
      </main>
      <footer>
        <FooterHome />
      </footer>
    </div>
  );
};

export { CareersPage };
