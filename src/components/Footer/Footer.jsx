import React, { useState } from "react";
import Modal from "react-modal";

const Footer = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "0.5rem",
      maxWidth: "80%", // Aumenta el ancho del modal
      maxHeight: "80%", // Añade una altura máxima
      overflow: "auto", // Añade la barra de desplazamiento
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const privacyPolicyHtml = `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aviso de Privacidad - Instituto Tecnológico de Durango</title>
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 text-gray-800 font-sans leading-normal">
      <div class="container mx-auto p-6">
          <div class="bg-white shadow-md rounded-lg p-8">
              <h1 class="text-2xl font-bold mb-4 text-center">Aviso de Privacidad</h1>
              <p class="mb-4">
                  El <strong>Instituto Tecnológico de Durango</strong>, con domicilio en Calle Universidad 123, Durango, Dgo., México, está comprometido con la protección de sus datos personales. Este aviso de privacidad explica cómo recolectamos, usamos y protegemos su información personal.
              </p>
              <h2 class="text-xl font-semibold mb-2">1. Recolección de Datos Personales</h2>
              <p class="mb-4">
                  Recolectamos datos personales de nuestros estudiantes, empleados y terceros relacionados. Los datos que recolectamos incluyen, pero no se limitan a, nombre, dirección, correo electrónico, número de teléfono, historial académico y laboral, y datos de contacto de emergencia.
              </p>
              <h2 class="text-xl font-semibold mb-2">2. Uso de Datos Personales</h2>
              <p class="mb-4">
                  Utilizamos sus datos personales para los siguientes fines:
              </p>
              <ul class="list-disc list-inside mb-4">
                  <li>Proveer servicios educativos y administrativos.</li>
                  <li>Mantener comunicación constante.</li>
                  <li>Cumplir con obligaciones legales y reglamentarias.</li>
                  <li>Mejorar nuestros servicios educativos.</li>
              </ul>
              <h2 class="text-xl font-semibold mb-2">3. Protección de Datos Personales</h2>
              <p class="mb-4">
                  Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
              </p>
              <h2 class="text-xl font-semibold mb-2">4. Derechos ARCO</h2>
              <p class="mb-4">
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud por escrito al correo electrónico: <a href="mailto:privacidad@itdurango.edu.mx" class="text-blue-500 hover:underline">privacidad@itdurango.edu.mx</a>
              </p>
              <h2 class="text-xl font-semibold mb-2">5. Cambios en el Aviso de Privacidad</h2>
              <p class="mb-4">
                  Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios.
              </p>
              <h2 class="text-xl font-semibold mb-2">6. Contacto</h2>
              <p class="mb-4">
                  Si tiene alguna duda sobre este Aviso de Privacidad, puede contactarnos en:
              </p>
              <p class="mb-4">
                  <strong>Instituto Tecnológico de Durango</strong><br>
                  Calle Universidad 123<br>
                  Durango, Dgo., México<br>
                  Tel: (618) 123-4567<br>
                  Correo electrónico: <a href="mailto:privacidad@itdurango.edu.mx" class="text-blue-500 hover:underline">privacidad@itdurango.edu.mx</a>
              </p>
          </div>
      </div>
  </body>
  </html>
  `;

  const termHtml = `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Términos y Condiciones - Instituto Tecnológico de Durango</title>
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 text-gray-800 font-sans leading-normal">
      <div class="container mx-auto p-6">
          <div class="bg-white shadow-md rounded-lg p-8">
              <h1 class="text-2xl font-bold mb-4 text-center">Términos y Condiciones</h1>
              <p class="mb-4">
                  Estos términos y condiciones rigen el uso del sitio web del <strong>Instituto Tecnológico de Durango</strong>. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, no utilice este sitio web.
              </p>
              <h2 class="text-xl font-semibold mb-2">1. Uso Aceptable</h2>
              <p class="mb-4">
                  Usted acepta utilizar este sitio web solo para fines legales y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute de este sitio web por parte de terceros.
              </p>
              <h2 class="text-xl font-semibold mb-2">2. Propiedad Intelectual</h2>
              <p class="mb-4">
                  Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, iconos de botones, imágenes, clips de audio y video, descargas digitales y compilaciones de datos, es propiedad del Instituto Tecnológico de Durango y está protegido por las leyes de propiedad intelectual.
              </p>
              <h2 class="text-xl font-semibold mb-2">3. Limitación de Responsabilidad</h2>
              <p class="mb-4">
                  El Instituto Tecnológico de Durango no será responsable por daños directos, indirectos, incidentales, especiales, consecuentes o ejemplares que resulten del uso o la imposibilidad de uso de este sitio web, incluso si se ha informado al Instituto Tecnológico de Durango sobre la posibilidad de tales daños.
              </p>
              <h2 class="text-xl font-semibold mb-2">4. Enlaces Externos</h2>
              <p class="mb-4">
                  Este sitio web puede contener enlaces a sitios web externos que no son controlados ni operados por el Instituto Tecnológico de Durango. No tenemos control ni asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios web de terceros.
              </p>
              <h2 class="text-xl font-semibold mb-2">5. Modificaciones</h2>
              <p class="mb-4">
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.
              </p>
              <h2 class="text-xl font-semibold mb-2">6. Contacto</h2>
              <p class="mb-4">
                  Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <p class="mb-4">
                  <strong>Instituto Tecnológico de Durango</strong><br>
                  Calle Universidad 123<br>
                  Durango, Dgo., México<br>
                  Tel: (618) 123-4567<br>
                  Correo electrónico: <a href="mailto:contacto@itdurango.edu.mx" class="text-blue-500 hover:underline">contacto@itdurango.edu.mx</a>
              </p>
          </div>
      </div>
  </body>
  </html>
  
  `;

  return (
    <footer className="h-10vh w-full bg-gradient-linear">
      <div className="w-9/10 m-auto h-full grid grid-cols-2 justify-center items-center">
        <div>
          <p className="text-white font-extralight">
            © 2024 Instituto Tecnológico de Durango. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex space-x-4 justify-end text-white">
          <a
            onClick={() => setPrivacyModalOpen(true)}
            className="hover:underline opacity-75 hover:opacity-100 transform transition duration-500 "
          >
            Aviso de Privacidad
          </a>
          <Modal isOpen={isPrivacyModalOpen} style={customStyles}>
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
              <div className="text-right">
                <button
                  onClick={() => setPrivacyModalOpen(false)}
                  className="mt-4 bg-itd-blue text-white font-bold py-2 px-4 rounded transform transition duration-500  hover:shadow-2xl hover:scale-105"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal>
          <a
            onClick={() => setTermsModalOpen(true)}
            className="hover:underline opacity-75 hover:opacity-100 transform transition duration-500 "
          >
            Términos y Condiciones
          </a>
          <Modal isOpen={isTermsModalOpen} style={customStyles}>
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: termHtml }} />
              <div className="text-right">
                <button
                  onClick={() => setTermsModalOpen(false)}
                  className="mt-4 bg-itd-blue text-white font-bold py-2 px-4 rounded transform transition duration-500  hover:shadow-2xl hover:scale-105"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
