import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ButtonNotice } from "../Button/ButtonNotice";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "./ConfirmationModal";
import "./SectionAdmNotice.css";

const SectionAdmNotice = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const newsPerPage = 12;
  const firstNewsRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get("http://localhost:4000/api/news/");
      const reversedNews = response.data.body.reverse();
      setNews(reversedNews);
      setIsFirstRender(false); // Mover esta línea aquí
    };

    fetchNews();
  }, [page]);

  useEffect(() => {
    if (!isFirstRender && firstNewsRef.current) {
      firstNewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [news, isFirstRender]);

  const handleDelete = async () => {
    await axios.put("http://localhost:4000/api/news/", { id: selectedId });
    setNews(news.filter((item) => item.id !== selectedId));
    console.log(news);
    setIsModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/adminnew/edit/${id}`);
  };

  const totalPages = Math.ceil(news.length / newsPerPage);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNews = news.filter(
    (item) =>
      (item.titulo
        ? item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        : false) ||
      (item.subtitulo
        ? item.subtitulo.toLowerCase().includes(searchTerm.toLowerCase())
        : false) ||
      (item.descripcion
        ? item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
        : false)
  );

  const indexOfLastNews = page * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews); // Utiliza filteredNews aquí

  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleActiveChange = async (id, isActive) => {
    // Encuentra la noticia con el ID dado
    const newsItem = news.find((item) => item.id === id);

    // Si no se encontró la noticia, termina la función
    if (!newsItem) return;

    // Crea una copia de la noticia y actualiza el campo 'activo'
    const updatedNewsItem = { ...newsItem, activo: String(isActive) };

    console.log(`Updating news item ${id}, active status: ${isActive}`);

    // Envía la noticia actualizada en la solicitud POST
    await axios.post(`http://localhost:4000/api/news/`, updatedNewsItem);

    // Actualiza el estado 'news' creando una nueva matriz
    setNews(news.map((item) => (item.id === id ? updatedNewsItem : item)));
  };

  return (
    <div className="w-9/10 h-auto m-auto mt-16 text-black px-16 py-16">
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-between items-center">
          <h1
            className="text-4xl font-extrabold mb-8 animate-slideDownFadeIn"
            ref={firstNewsRef}
          >
            Panel de Administración de Noticias
          </h1>
          <div className="grid grid-cols-3 gap-8 items-center justify-center animate-slideDownFadeIn">
            <form className="form relative col-span-2 ">
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                  width="17"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    strokeWidth="1.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                className="input rounded-full px-8 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 hover:shadow-xl"
                placeholder="Buscar noticias..."
                required=""
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                type="reset"
                className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </form>
            <div>
              <ButtonNotice
                color="green"
                text="New"
                onClick={() => navigate("/adminnew/edit")}
              />
            </div>
          </div>
        </div>
        <main className="flex-auto p-6 animate-slideRightFadeIn">
          <div className="p-4">
            <div className="flex items-center justify-center h-full">
              {currentNews.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {currentNews.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-white border border-gray-300 rounded-lg overflow-hidden hover:scale-105 transform transition duration-500 hover:shadow-2xl flex flex-col ${
                        Number(item.activo) === 0 ? "opacity-70" : ""
                      }`}
                    >
                      <a className="block h-64" href="#">
                        <img
                          className="w-full h-full object-cover"
                          src={item.imagen_url}
                          alt={item.titulo}
                        />
                      </a>
                      <div className="p-4 flex-grow">
                        <a className="block" href="#">
                          <h3 className="text-lg font-bold text-gray-90 mb-2 line-clamp-2">
                            {item.titulo}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {item.descripcion}
                          </p>
                        </a>
                        <div>
                          <label class="cyberpunk-checkbox-label font-extralight text-sm">
                            <input
                              type="checkbox"
                              checked={Number(item.activo) === 1}
                              onChange={(e) =>
                                handleActiveChange(
                                  item.id,
                                  e.target.checked ? 1 : 0
                                )
                              }
                              class="cyberpunk-checkbox"
                            />
                            Estado
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border-t border-gray-300">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.subtitulo}
                        </div>

                        <div className="grid grid-cols-2 gap-4 col-span-full">
                          <ButtonNotice
                            color="blue"
                            onClick={() => handleEdit(item.id)}
                          />
                          <ButtonNotice
                            onClick={() => handleDeleteClick(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full space-x-4">
                  <p className="text-2xl font-extralight py-32 m-auto text-center">
                    Sin resultados
                  </p>
                </div>
              )}
            </div>
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
        </main>
      </div>
    </div>
  );
};

export { SectionAdmNotice };
