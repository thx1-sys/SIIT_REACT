import React, { useState } from "react";
import TypingEffect from "react-typing-effect";

const Input = ({ id, placeholder, className }) => (
  <input id={id} placeholder={placeholder} className={className} />
);

const Button = ({ type, variant, size, className, children }) => (
  <button type={type} className={className}>
    {children}
  </button>
);

const FloatButton = () => {
  const [showChat, setShowChat] = useState(false);

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <>
      {!showChat && (
        <button
          onClick={handleOpenChat}
          className="w-20 h-20 fixed bottom-0 right-0 mb-4 m-auto flex items-center justify-center mr-4 p-2 cursor-pointer bg-white px-3 py-2 rounded-md text-red-950 tracking-wider shadow-xl animate-bounce hover:animate-none fill-rose-950 hover:bg-rose-950 hover:text-white transition-effect "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-messages"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
          </svg>
        </button>
      )}
      {showChat && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end scale-95 hover:scale-100 transform transition duration-500">
          <div className="bg-itd-blue text-white rounded-lg shadow-lg p-4 w-80 max-w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Chat de Ayuda</h3>
              <button onClick={handleCloseChat}>
                <p className="text-xl scale-90 hover:scale-100 hover:text-red-500 transform transition duration-500">
                  x
                </p>
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-sm">¿Cómo puedo asistirte hoy?</p>
              </div>
              <form className="w-full grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
                <Input
                  id="message"
                  placeholder="Escribe tu mensaje..."
                  className="w-full col-span-4 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="rounded-full justify-self-end md:justify-self-center transform transition duration-500 hover:scale-110 opacity-70 hover:opacity-100"
                >
                  <SendIcon className="h-5 w-5" />
                  <span className="sr-only">Enviar</span>
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-2 bg-itd-blue text-white rounded-lg shadow-lg p-3 w-80 max-w-full">
            <div style={{ overflow: "hidden" }}>
              <TypingEffect
                text={[
                  "¡Hola! Soy el asistente automatizado del Instituto Tecnológico de Durango. Si necesitas más ayuda, por favor, contacta a nuestro equipo de soporte.",
                ]}
                speed={50}
                eraseSpeed={50}
                typingDelay={500}
                className="text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { FloatButton };

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function WebcamIcon(props) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}
