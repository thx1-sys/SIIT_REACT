import React, { useState } from "react";
import Cookies from "js-cookie";
import "./CookieCard.css";

function CookieCard() {
  const [isOpen, setIsOpen] = useState(true);
  const [isPolicyVisible, setIsPolicyVisible] = useState(false); // Nuevo estado para las políticas
  const [isPreferencesVisible, setIsPreferencesVisible] = useState(false); // Nuevo estado para las preferencias

  const handleAcceptClick = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 7 });
    setIsOpen(false);
  };

  const handlePreferencesSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de lo que sucede cuando se envía el formulario
    console.log("Formulario de preferencias enviado");
  };

  const handleRejectClick = () => {
    setIsOpen(false);
  };

  const handlePolicyClick = (event) => {
    // Nueva función para manejar el clic en el enlace
    event.preventDefault();
    setIsPolicyVisible(true);
  };

  const handlePreferencesClick = (event) => {
    // Nueva función para manejar el clic en el enlace
    event.preventDefault();
    setIsPreferencesVisible(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black bg-opacity-80 w-screen h-screen fixed z-50 grid m-auto items-center justify-center transform transition duration-300 hover:scale-110">
      <div className="cookie-card overlay">
        <span className="title">
          🍪 Aviso de Cookies <br />
          Instituto Tecnológico de Durango
        </span>
        <p className="description">
          En el Instituto Tecnológico de Durango utilizamos cookies para
          asegurar que te damos la mejor experiencia en nuestro sitio web.{" "}
          <a href="#" className="" onClick={handlePolicyClick}>
            Lee nuestras políticas de cookies
          </a>
          .
        </p>
        <div className="actions">
          <button className="pref " onClick={handlePreferencesClick}>
            Administra tus preferencias
          </button>
          <button
            className="reject transform transition duration-300 hover:scale-110 hover:text-red-600"
            onClick={handleRejectClick}
          >
            Rechazar
          </button>
          <button
            className="accept transform transition duration-300 hover:scale-110 "
            onClick={handleAcceptClick}
          >
            Aceptar
          </button>
        </div>
      </div>
      {isPolicyVisible && (
        <div className="bg-black bg-opacity-80 w-screen h-screen fixed z-50 grid m-auto items-center justify-center transform transition duration-300 hover:scale-110">
          <div className="cookie-card overlay">
            <h2 className="title">Políticas de cookies</h2>
            <div className="description max-h-[500px] overflow-auto">
              <h3 className="font-semibold mb-2">Aviso de Cookies</h3>
              <p className="font-semibold mb-2">
                Instituto Tecnológico de Durango
              </p>
              <p>
                En el Instituto Tecnológico de Durango utilizamos cookies para
                asegurar que te damos la mejor experiencia en nuestro sitio web.
                Al continuar navegando en este sitio, aceptas el uso de cookies
                de acuerdo con nuestras políticas de cookies.
              </p>
              <h3 className="font-semibold mb-2 mt-4">Políticas de Cookies</h3>
              <ol>
                <li>
                  <h4>¿Qué son las cookies?</h4>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan
                    en tu dispositivo (ordenador, smartphone, tablet, etc.)
                    cuando visitas ciertos sitios web. Estos archivos permiten
                    que el sitio web recuerde tus acciones y preferencias (como
                    inicio de sesión, idioma, tamaño de fuente y otras
                    preferencias de visualización) durante un periodo de tiempo.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold mb-2 mt-4">
                    Tipos de cookies que utilizamos
                  </h4>
                  <ul>
                    <li>
                      Cookies esenciales: Son necesarias para el funcionamiento
                      del sitio web. Sin estas cookies, el sitio no funcionaría
                      correctamente.
                    </li>
                    <li>
                      Cookies de rendimiento: Recopilan información sobre cómo
                      los visitantes usan nuestro sitio web, por ejemplo, qué
                      páginas visitan con más frecuencia. Esta información se
                      utiliza para mejorar el funcionamiento del sitio web.
                    </li>
                    <li>
                      Cookies funcionales: Permiten al sitio web recordar las
                      elecciones que realizas (como tu nombre de usuario, idioma
                      o región) y proporcionan características mejoradas y más
                      personales.
                    </li>
                    <li>
                      Cookies de análisis: Utilizamos estas cookies para
                      entender mejor el comportamiento de nuestros usuarios y
                      mejorar el sitio web en consecuencia.
                    </li>
                    <li>
                      Cookies de publicidad: Estas cookies se utilizan para
                      hacer que la publicidad sea más relevante para ti y para
                      tus intereses. También se utilizan para limitar la
                      cantidad de veces que ves un anuncio y para ayudar a medir
                      la efectividad de las campañas publicitarias.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold mb-2 mt-4">
                    Cómo usamos las cookies
                  </h4>
                  <p>Utilizamos cookies para:</p>
                  <ul>
                    <li>Recordar tus preferencias y configuraciones.</li>
                    <li>
                      Mejorar la funcionalidad y el rendimiento de nuestro sitio
                      web.
                    </li>
                    <li>
                      Analizar el tráfico y comportamiento del usuario en
                      nuestro sitio web.
                    </li>
                    <li>Mostrar anuncios relevantes para ti.</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold mb-2 mt-4">
                    Gestión de cookies
                  </h4>
                  <p>
                    Puedes controlar y/o eliminar las cookies como desees. Para
                    más detalles, visita aboutcookies.org. Puedes eliminar todas
                    las cookies que ya están en tu computadora y configurar la
                    mayoría de los navegadores para evitar que se almacenen. Sin
                    embargo, si lo haces, es posible que tengas que ajustar
                    manualmente algunas preferencias cada vez que visites un
                    sitio y algunos servicios y funcionalidades pueden no
                    funcionar.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold mb-2 mt-4">
                    Cambios en nuestras políticas de cookies
                  </h4>
                  <p>
                    Podemos actualizar nuestra política de cookies en cualquier
                    momento. Te notificaremos cualquier cambio publicando la
                    nueva política en nuestro sitio web. Te recomendamos revisar
                    esta política periódicamente para estar informado sobre cómo
                    utilizamos las cookies.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold mb-2 mt-4">Contacto</h4>
                  <p>
                    Si tienes alguna pregunta sobre nuestra política de cookies,
                    puedes contactarnos a través de:
                  </p>
                  <p>Instituto Tecnológico de Durango</p>
                  <p>Correo electrónico: itddurango@itdurango.edu.mx</p>
                  <p>
                    Dirección: Avenida Felipe Pescador #1830, Col. Nueva
                    Vizcaya, Durango, Dgo. México, C.P. 34080.
                  </p>
                  <p>
                    Al continuar usando nuestro sitio web, aceptas nuestras
                    políticas de cookies.
                  </p>
                  <p>
                    Esta política de cookies fue actualizada por última vez el
                    10 Jun 2024.
                  </p>
                </li>
              </ol>
            </div>
            <div className="actions">
              <button
                className="accept transform transition duration-300 hover:scale-110"
                onClick={() => setIsPolicyVisible(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      {isPreferencesVisible && (
        <div className="bg-black bg-opacity-80 w-screen h-screen fixed z-50 grid m-auto items-center justify-center transform transition duration-300 hover:scale-110">
          <div className="cookie-card overlay">
            <h2 className="title">Administra tus preferencias</h2>
            <div className="description max-h-[500px] ">
              <form onSubmit={handlePreferencesSubmit} className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="preference1"
                    id="preference1"
                    className="mr-2"
                  />
                  <label htmlFor="preference1">Análisis del tráfico</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="preference2"
                    id="preference2"
                    className="mr-2"
                  />
                  <label htmlFor="preference2">
                    Personalización de contenido{" "}
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="submit"
                    value="Guardar"
                    className="accept text-sm px-2 py-3 transform transition duration-300 hover:scale-110"
                  />
                  <button
                    className="accept text-sm px-2 py-1 transform transition duration-300 hover:scale-110"
                    onClick={() => setIsPreferencesVisible(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieCard;
