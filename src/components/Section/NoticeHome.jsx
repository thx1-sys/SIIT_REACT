import React, { useState, useEffect } from "react";
import axios from "axios";
import { NoticeCard } from "../Card/NoticeCard";
import "./NoticeHome.css";
import { PrimaryButton } from "../Button/PrimaryButton";
import { FooterHome } from "../Footer/FooterHome";
import { Link } from "react-router-dom";

function NoticeHome() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/lastfour")
      .then((response) => {
        console.log(response.data); // Mostrar los datos en la consola
        setData(response.data); // Guardar los datos en el estado
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="w-screen h-screen mt-32">
        <div className="w-8/10 notice-container h-8/10 m-auto">
          <h4 className="text-black font-extrabold text-3xl flex items-center mt-10 font-yeseva">
            Noticias
          </h4>
          <div className="w-full h-full m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
            {data &&
              data.body &&
              data.body
                .slice(0, 4)
                .map((notice, index) => (
                  <NoticeCard
                    key={index}
                    title={notice.titulo}
                    subtitle={notice.subtitulo}
                    description={notice.descripcion}
                    content={notice.contenido}
                    imageUrl={notice.imagen_url}
                    noticeUrl={notice.url}
                  />
                ))}
          </div>
          <div className="flex items-start justify-center">
            <PrimaryButton to="/news" text="Ver más" subtext="Noticias" />
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
}

export { NoticeHome };
