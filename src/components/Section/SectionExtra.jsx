import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Activity = ({ icon: Icon, name, onClick }) => (
  <Link
    onClick={onClick}
    href="#"
    className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center transform transition duration-500 hover:border hover:shadow-2xl hover:scale-105"
    prefetch={false}
  >
    <Icon className="h-8 w-8 text-gray-500 " />
    <span className="mt-2 text-sm font-medium text-gray-900 ">{name}</span>
  </Link>
);
const activities = [
  { icon: PaintbrushIcon, name: "Visita a Museo" },
  { icon: BookIcon, name: "Taller de Lectura" },
  { icon: Music2Icon, name: "Concierto" },
  { icon: TheaterIcon, name: "Teatro" },
  { icon: ShoppingBasketIcon, name: "Baloncesto" },
  { icon: BusIcon, name: "Fútbol" },
  { icon: TurtleIcon, name: "Tenis" },
  { icon: FishIcon, name: "Natación" },
];

const SectionExtra = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 5000); // Close after 5 seconds
  };

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
      maxWidth: "500px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div className="w-9/10 min-h-[80vh] h-auto m-auto mt-16px-16 py-16 grid items-center justify-center">
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div class="flex flex-col items-center justify-center bg-gray-100 ">
          <div class="bg-white  p-8 rounded-lg shadow-md max-w-md w-full">
            <div class="text-center">
              <h1 class="text-3xl font-bold mb-2 text-gray-900">
                Selección de Actividades
              </h1>
              <p class="text-gray-500 mb-6">ENE-JUN/2024</p>
              <p class="text-gray-500 mb-6">
                Hoy es{" "}
                {new Date()
                  .toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </p>
              <div class="bg-red-500 text-white font-bold py-4 px-8 rounded-lg mb-6">
                ¡Lo siento! El período de selección de actividades para
                ENE-JUN/2024 ya ha pasado.
              </div>
              <p class="text-gray-500 ">
                Por favor, comuníquese con su administrador para obtener más
                información.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                class="mt-4 bg-itd-blue text-white font-bold py-2 px-4 rounded transform transition duration-500  hover:shadow-2xl hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="w-full max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 ">
            Selecciona una actividad
          </h1>
          <div className="grid gap-6">
            <div>
              <h2 className="text-xl font-semiboldtext-gray-900 ">
                Actividades Extraescolares
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {activities.map((activity) => (
                  <Activity {...activity} onClick={handleClick} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionExtra };

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function Music2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function ShoppingBasketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </svg>
  );
}

function TheaterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function TurtleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </svg>
  );
}
