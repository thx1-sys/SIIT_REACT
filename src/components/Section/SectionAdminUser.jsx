import React, { useEffect, useState } from "react";
import { BotonAdmin } from "../Button/BotonAdmin";
import { useNavigate } from "react-router-dom";
import { ButtonNotice } from "../Button/ButtonNotice";
import { ConfirmationModal } from "./ConfirmationModal";
import axios from "axios";

const initialUser = {
  id: "",
  nombre: "",
  apellido_paterno: "",
  apellido_materno: "",
  correo: "",
  imagen_perfil: "",
  tipo_de_usuario: "",
  permiso: "",
  activo: "",
};

const SectionAdminUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/usuarios/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        setData(data.body);
      });
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDelete = async () => {
    await axios.put("http://localhost:4000/api/usuarios/", {
      id: selectedUser.id,
    });
    setData(data.filter((item) => item.id !== selectedUser.id));
    setIsFormOpen(false);
  };

  return (
    <div className=" w-9/10 min-h-[80vh] h-auto m-auto grid items-center justify-center sm:py-8">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold">Panle de Usuarios</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-sm rounded-xl">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apellido Paterno
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apellido Materno
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Correo
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Imagen de Perfil
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo de Usuario
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Permiso
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Activo
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Editar
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.isArray(data) &&
            data.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-2 whitespace-nowrap">{item.id}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.nombre}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {item.apellido_paterno}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {item.apellido_materno}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{item.correo}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <img
                    className="rounded-full w-10 h-10 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-600"
                    src={
                      item.imagen_perfil
                        ? item.imagen_perfil
                        : "https://www.latercera.com/resizer/9Yo9YIAEMo7t9hQTNUgPa9mgE-8=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg"
                    }
                    alt="Imagen de perfil"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {item.tipo_de_usuario}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{item.permiso}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.activo}</td>
                <td className="px-3 py-2 whitespace-nowrap grid m-auto items-center justify-center">
                  <ButtonNotice
                    color="blue"
                    onClick={() => handleEditClick(item)}
                  />
                </td>
                <td>
                  <ButtonNotice color="red" onClick={handleDelete} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isFormOpen && selectedUser && (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID:
              <input
                name="id"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.id}
                readOnly
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre:
              <input
                name="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.nombre}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Paterno:
              <input
                name="apellido_paterno"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.apellido_paterno}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Materno:
              <input
                name="apellido_materno"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.apellido_materno}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo:
              <input
                name="correo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.correo}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Imagen de Perfil:
              <input
                name="imagen_perfil"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.imagen_perfil}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Usuario:
              <input
                name="tipo_de_usuario"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.tipo_de_usuario}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Permiso:
              <input
                name="permiso"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.permiso}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Activo:
              <input
                name="activo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={selectedUser.activo}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <ButtonNotice color="blue" text="Guardar" />
          </div>
        </form>
      )}
    </div>
  );
};

export { SectionAdminUser };
