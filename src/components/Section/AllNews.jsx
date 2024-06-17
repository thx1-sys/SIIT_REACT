import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ButtonNews } from "../Button/ButtonNews";

function AllNews() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const newsPerPage = 9;
  const firstNewsRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/")
      .then((response) => {
        const activeNews = response.data.body.filter(
          (newsItem) => Number(newsItem.activo) === 1
        );
        setNews(activeNews.reverse());
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  useEffect(() => {
    if (firstNewsRef.current) {
      firstNewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (!news.length) {
    return <div>Loading...</div>;
  }

  // Calculate the range of news for the current page
  const indexOfLastNews = page * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Calculate the total number of pages
  const totalPages = Math.ceil(news.length / newsPerPage);

  return (
    <section className="py-16 md:py-20 bg-gradient-linear-white">
      <div className="container mx-auto h-auto px-4 md:px-6 py-12">
        <h2 ref={firstNewsRef} className="text-3xl font-bold mb-8 text-black">
          Todas las noticias
        </h2>
        <div className="h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((article, index) => (
            <div
              key={article.id}
              className="h-60vh bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col transform transition duration-500 hover:scale-105"
            >
              <img
                src={article.imagen_url}
                alt={article.titulo}
                className="w-full h-auto object-cover"
                style={{ height: "250px" }}
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-black line-clamp-2">
                  {article.titulo.substring(0, 100)}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-4">
                  {article.descripcion.substring(0, 200)}
                </p>
              </div>
              <div className="ml-4 mb-4">
                <ButtonNews href={news.url || "#"}> Leer más</ButtonNews>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 items-center text-xl">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : page)}
            className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
          >
            &lt;
          </button>
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num + 1)}
              className={`h-12 w-12 mx-1 px-3 py-2 border rounded-full ${
                num + 1 === page
                  ? "bg-itd-blue text-white transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
                  : "bg-white text-itd-blue transform transition duration-500 hover:scale-105 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {num + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(page < totalPages ? page + 1 : page)}
            className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export { AllNews };
