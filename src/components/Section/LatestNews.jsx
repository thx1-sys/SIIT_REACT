import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonNews } from "../Button/ButtonNews";

function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/lasthree")
      .then((response) => {
        setNews(response.data.body);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!news.length) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-linear-blue">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Últimas noticias</h2>
        <div className="h-60vh grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col ransform transition duration-500 hover:scale-105"
            >
              <img
                src={article.imagen_url}
                alt={article.titulo}
                className="w-full h-auto object-cover"
                style={{ height: "250px" }}
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {article.titulo.substring(0, 100)}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-4">
                  {article.descripcion.substring(0, 200)}
                </p>
              </div>
              <div className="mb-4 ml-4">
                <ButtonNews href={article.url || "#"}> Leer más</ButtonNews>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LatestNews };
