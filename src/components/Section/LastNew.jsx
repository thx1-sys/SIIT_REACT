import React, { useState, useEffect } from "react";
import { ButtonNews } from "../Button/ButtonNews";
import axios from "axios";

function NewsSection() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/lastone")
      .then((response) => {
        setNews(response.data.body);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-gradient-linear-white pt-12 md:py-12">
      <h1 className="text-6xl font-extrabold text-center font-yeseva mb-2 animate-slideDownFadeIn">
        Noticias
      </h1>
      <div className="border-b border-black mb-8 w-100vh m-auto animate-slideDownFadeIn"></div>
      <h2 className="text-center text-4xl mb-8 font-extrabold animate-slideDownFadeIn">
        Noticia más reciente
      </h2>
      <div className="container mx-auto px-4 md:px-6 animate-slideLeftFadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="transform transition duration-500 hover:scale-105 shadow-2xl">
            <img
              src={news.imagen_url}
              alt="Featured News"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 line-clamp-3">
              {news.titulo}
            </h2>
            <h3 className="text-xl font-bold mb-4 line-clamp-1">
              {news.subtitulo}
            </h3>
            <p className="text-gray-700 mb-6 line-clamp-15">{news.contenido}</p>
            <div className="flex flex-col gap-4 items-start">
              <ButtonNews href={news.url || "#"}> Leer más</ButtonNews>
              <a
                href="https://itd-oficial.tumblr.com/archive"
                className="text-blue-500 hover:text-blue-600 font-medium ml-2 transform transition duration-500 hover:scale-105 hover:underline hover:font-bold"
              >
                Ver todas las noticias
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NewsSection };
