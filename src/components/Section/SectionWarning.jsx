import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNotice } from "../Button/ButtonNotice";
import axios from "axios";
import { ConfirmationModal } from "./ConfirmationModal";
import { SuccessToast } from "../Alert/SuccessToast";

const SectionWarning = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [showImageId, setShowImageId] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/aviso/");
    setData(response.data.body.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/adminwar/edit/${id}`);
  };

  const handleDelete = async () => {
    await axios.put("http://localhost:4000/api/aviso/", { id: selectedId });
    setData(data.filter((item) => item.id !== selectedId));
    console.log(data);
    setIsModalOpen(false);
    fetchData();

    // Show the toast
    setShowToast(true);

    // Hide the toast after 10 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleActiveChange = async (id, isActive) => {
    // Encuentra el aviso con el ID dado
    const avisoItem = data.find((item) => item.id === id);

    // Si no se encontró el aviso, termina la función
    if (!avisoItem) return;

    // Crea una copia del aviso y actualiza el campo 'estado'
    const updatedAvisoItem = { ...avisoItem, estado: isActive ? 1 : 0 };

    console.log(`Updating aviso item ${id}, active status: ${isActive}`);

    // Envía el aviso actualizado en la solicitud PUT
    await axios.post(`http://localhost:4000/api/aviso/`, updatedAvisoItem);

    // Actualiza el estado 'data' creando una nueva matriz
    setData(data.map((item) => (item.id === id ? updatedAvisoItem : item)));
  };

  return (
    <div className="w-full min-h-[80vh] h-auto m-0 py-16">
      <SuccessToast
        message="Aviso borrado con éxito"
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
      <div className="w-8/10 grid grid-cols-2 m-auto">
        <h1 className="text-4xl font-extrabold animate-slideDownFadeIn">
          Panel de avisos
        </h1>
        <div className="w-full flex justify-end animate-slideDownFadeIn">
          <ButtonNotice
            color="green"
            text="Crear aviso"
            onClick={() => navigate("/adminwar/edit")}
          />
        </div>
        <div className="w-full h-auto border border-gray-300 mt-12 col-span-2 rounded-xl animate-slideUpFadeIn">
          <div className="border-b border-gray-300">
            <div className="w-9/10 m-auto grid grid-cols-9 py-4 text-gray-500 text-lgborder">
              <div>
                <p>Imagen</p>
              </div>
              <div className="col-span-2">
                <p>Título</p>
              </div>
              <div className="col-span-3">
                <p>Descripción</p>
              </div>
              <div className="col-span-2">
                <p>Estado</p>
              </div>
              <div>
                <p>Acciones</p>
              </div>
            </div>
          </div>
          {[...data].reverse().map((item) => (
            <div
              key={item.id}
              className="w-9/10 m-auto grid grid-cols-9 py-4 text-gray-800 text-lgborder items-center "
            >
              <div
                className="w-24 h-24 bg-gray-200 rounded-xl cursor-pointer"
                onClick={() => setShowImageId(item.id)}
              >
                <img
                  className="object-cover w-full h-full rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                  src={item.url}
                  alt={item.titulo}
                />
              </div>

              {showImageId === item.id && (
                <div
                  className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50"
                  onClick={() => setShowImageId(null)}
                >
                  <img
                    className="object-contain max-w-full max-h-full"
                    src={item.url}
                    alt={item.titulo}
                  />
                </div>
              )}
              <div className="font-bold col-span-2">
                <p>{item.titulo}</p>
              </div>
              <div className="col-span-3 font-light">
                <p>{item.descripcion}</p>
              </div>
              <label
                className={`w-32 col-span-2 p-2 rounded-full grid items-center justify-center text-white font-bold cursor-pointer transform transition duration-500 hover:scale-110 hover:shadow-2xl ${
                  item.estado === 0 ? "bg-red-500" : "bg-green-500"
                }`}
              >
                <p>{item.estado === 0 ? "Desactivado" : "Activado"}</p>
                <input
                  type="checkbox"
                  checked={Number(item.estado) === 1}
                  onChange={(e) =>
                    handleActiveChange(item.id, e.target.checked ? 1 : 0)
                  }
                  className="cyberpunk-checkbox hidden"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <ButtonNotice
                  color="blue"
                  onClick={() => handleEdit(item.id)}
                />
                <ButtonNotice onClick={() => handleDeleteClick(item.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SectionWarning };
