import React, { useState } from "react";

const FeedbackSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "sgc.buzondequejasysugerencias@itdurango.edu.mx"
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <div className="w-8/10 grid items-center m-auto">
      <section className="h-40vh">
        <h4 className="text-2xl font-bold mb-8 h-1/10">Queremos escucharte</h4>
        <div className="border border-gray-300 rounded-lg h-9/10 grid grid-cols-3 p-4 items-center justify-center transform transition duration-500 scale-100 hover:scale-105 opacity-80 hover:opacity-100 hover:shadow-2xl hover:border hover:border-gray-600">
          <div className="col-span-2">
            <p className="text-black mb-4">
              ¿Tienes alguna sugerencia o queja de cómo te brindamos el servicio
              educativo? Escríbenos a:
            </p>
            <div>
              {isCopied && (
                <div className="fixed top-0 left-0 w-full h-10 bg-itd-red text-white flex items-center justify-center rounded-t-lg shadow-2xl">
                  Correo Copiado!
                </div>
              )}
              <p
                className="text-black text-lg font-bold underline mb-4 hover:text-blue-500 cursor-pointer transform transition duration-500 "
                onClick={copyToClipboard}
              >
                sgc.buzondequejasysugerencias@itdurango.edu.mx
              </p>
            </div>
            <p className="text-black">
              Es importante escribir correctamente los datos del correo, para
              poder darte seguimiento y estar en contacto.
            </p>
          </div>
          <div>
            <img
              className="w-40 object-cover self-center justify-self-center m-auto shadow-black-lg"
              src="../../src/assets/images/correo.png"
              alt="Imagen de correo electrónico"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { FeedbackSection };
