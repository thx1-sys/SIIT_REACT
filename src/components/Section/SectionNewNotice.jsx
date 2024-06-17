import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessToast } from "../Alert/SuccessToast";
import { ErrorToast } from "../Alert/ErrorToast";

const SectionNewNotice = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const { id } = useParams();
  const [validationError, setValidationError] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass = `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
    validationError
      ? "border-red-500 placeholder-red-500"
      : validationSuccess
      ? "border-green-500 placeholder-green-500"
      : ""
  }`;

  const inputClassDes = `flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
    validationError
      ? "border-red-500 placeholder-red-500"
      : validationSuccess
      ? "border-green-500 placeholder-green-500"
      : ""
  }`;

  const inputClassCon = `flex h-60 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
    validationError
      ? "border-red-500 placeholder-red-500"
      : validationSuccess
      ? "border-green-500 placeholder-green-500"
      : ""
  }`;

  const labelClass = `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
    validationError ? "text-red-500" : validationSuccess ? "text-green-500" : ""
  }`;

  const headingClass = `whitespace-nowrap text-2xl font-semibold leading-none tracking-tight ${
    validationError ? "text-red-500" : validationSuccess ? "text-green-500" : ""
  }`;

  const [news, setNews] = useState({
    titulo: "",
    subtitulo: "",
    descripcion: "",
    contenido: "",
    imagen_url: "",
    url: "",
    activo: 1,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNews((prevNews) => ({
      ...prevNews,
      [id]: value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/")
      .then((response) => {
        const newsItem = response.data.body.find(
          (item) => item.id === parseInt(id)
        );
        if (newsItem) {
          setNews(newsItem);
        } else {
          console.error("No se encontró la noticia con el ID especificado");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [id]);

  const validateForm = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Simple regex for URL validation
    const errors = {};

    if (news.titulo === "" || news.titulo.length > 255) {
      errors.titulo =
        "El título es obligatorio y debe tener menos de 255 caracteres.";
    }

    if (news.subtitulo === "" || news.subtitulo.length > 255) {
      errors.subtitulo =
        "El subtítulo es obligatorio y debe tener menos de 255 caracteres.";
    }

    if (news.descripcion === "") {
      errors.descripcion = "La descripción es obligatoria.";
    }

    if (news.contenido === "") {
      errors.contenido = "El contenido es obligatorio.";
    }

    if (
      news.imagen_url === "" ||
      !urlRegex.test(news.imagen_url) ||
      news.imagen_url.length > 500
    ) {
      errors.imagen_url =
        "La URL de la imagen es obligatoria, debe ser una URL válida y tener menos de 500 caracteres.";
    }

    if (news.url === "" || !urlRegex.test(news.url) || news.url.length > 500) {
      errors.url =
        "La URL de la noticia es obligatoria, debe ser una URL válida y tener menos de 500 caracteres.";
    }

    if (Object.keys(errors).length > 0) {
      console.error(errors);
      setErrorMessage(Object.values(errors).join(" "));
      setShowErrorToast(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setValidationError(false);
      setValidationSuccess(true);
      axios
        .post("http://localhost:4000/api/news/", news)
        .then((response) => {
          setShowSuccessToast(true);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      setValidationError(true);
      setValidationSuccess(false);
      setTimeout(() => setValidationError(false), 5000);
      toast.error("Por favor, rellena todos los campos.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    if (validationError || validationSuccess) {
      const timer = setTimeout(() => {
        setValidationError(false);
        setValidationSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [validationError, validationSuccess]);

  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => {
        setShowSuccessToast(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      const timer = setTimeout(() => {
        setShowErrorToast(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showErrorToast, setShowErrorToast]);

  return (
    <div>
      <div className="w-6/10 min-h-[80vh] h-auto px-16 py-16 items-center justify-center m-auto">
        <SuccessToast
          message="Cambios realizados correctamente."
          showToast={showSuccessToast}
          setShowToast={setShowSuccessToast}
        />
        <ErrorToast
          message={errorMessage}
          showToast={showErrorToast}
          setShowToast={setShowErrorToast}
        />
        <form
          onSubmit={handleSubmit}
          className={`rounded-lg border bg-card text-card-foreground shadow-sm w-full hover:scale-105 transform transition duration-500 hover:shadow-2xl bg-gray-50 hover:bg-white hover:border-gray-400 animate-slideRightFadeIn ${
            validationError ? "border-red-500" : ""
          } overflow-auto`}
        >
          <div className="grid grid-cols-2 space-y-1.5 p-6">
            <h3 className={`col-span-2 ${headingClass}`}>
              Editar o agregar nueva noticia
            </h3>
            <p className="text-sm text-muted-foreground pt-2">
              Completa los campos para publicar una nueva noticia.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass} htmlFor="titulo">
                  Título
                </label>
                <input
                  className={inputClass}
                  id="titulo"
                  placeholder="Ingresa el título de la noticia"
                  value={news.titulo}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="imagen_url">
                  URL de la imagen
                </label>
                <input
                  className={inputClass}
                  id="imagen_url"
                  placeholder="Ingresa la URL de la imagen de la noticia"
                  value={news.imagen_url}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="subtitulo">
                  Subtítulo
                </label>
                <input
                  className={inputClass}
                  id="subtitulo"
                  placeholder="Ingresa el subtítulo de la noticia"
                  value={news.subtitulo}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="url">
                  URL de la noticia
                </label>
                <input
                  className={inputClass}
                  id="url"
                  placeholder="Ingresa la URL de la noticia"
                  value={news.url}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="descripcion">
                  Descripción
                </label>
                <textarea
                  className={inputClassDes}
                  id="descripcion"
                  placeholder="Ingresa la descripción de la noticia"
                  value={news.descripcion}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="row-span-2 space-y-2 h-full">
                <h4 className="w-full m-auto">Previsualización de la imagen</h4>
                <div className="pb-2 h-6/10">
                  <div className="w-full m-auto h-full overflow-hidden rounded-lg">
                    {news.imagen_url ? (
                      <div className="w-full h-full">
                        <div className="w-full ">
                          <img
                            src={news.imagen_url}
                            alt="Previsualización"
                            className="w-full h-full object-cover object-center hover:scale-105 transform transition duration-500 hover:shadow-2xl"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full grid items-center justify-center border bg-gray-100 border-gray-300 hover:scale-105 transform transition duration-500 hover:shadow-2xl">
                        <p className="text-xl font-extralight text-center">
                          No hay imagen
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid items-start justify-end">
                  <button
                    type="submit"
                    className="w-[150px] bg-black h-[50px] flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                  >
                    Guardar
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="contenido">
                  Contenido
                </label>
                <textarea
                  className={inputClassCon}
                  id="contenido"
                  placeholder="Ingresa el contenido de la noticia"
                  value={news.contenido}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SectionNewNotice };
