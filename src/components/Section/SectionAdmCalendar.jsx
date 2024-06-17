import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonNotice } from "../Button/ButtonNotice";
import { ConfirmationModal } from "./ConfirmationModal";

const SectionAdmCalendar = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [selectedNews, setSelectedNews] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadCalendarData();
  }, []);

  const loadCalendarData = () => {
    axios
      .get("http://localhost:4000/api/Calendar")
      .then((response) => {
        setCalendarData(response.data.body);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(calendarData.length / itemsPerPage);

  const [form, setForm] = useState({
    id: "",
    actividad: "",
    fecha_inicio: null,
    fecha_fin: null,
  });

  const postCalendarData = async () => {
    console.log(form);
    try {
      const dataToSend = form.id === "" ? { ...form, id: undefined } : form;
      const response = await axios.post(
        "http://localhost:4000/api/calendar",
        dataToSend
      );
      console.log(response.data);
      // Aquí puedes manejar la respuesta. Por ejemplo, puedes recargar los datos del calendario.
      loadCalendarData();
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/calendar",
        {
          id: form.id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      loadCalendarData();
      setIsModalOpen(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleDeleteClick = (id) => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-9/10 min-h-[80vh] h-auto px-16 py-16 items-center justify-center m-auto">
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
      <div className="flex flex-row justify-between">
        <div className="flex justify-center m-auto">
          <div className="-my-2 sm:-mx-6 lg:-mx-8 col-span-2">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 animate-slideLeftFadeIn">
              <div className="grid grid-cols-2">
                <h1 className="text-4xl font-extrabold">Panel de calendario</h1>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border rounded-md mb-4"
                />
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actividad
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fecha inicio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fecha fin
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {calendarData
                      .filter(
                        (item) =>
                          item.actividad
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          (item.fecha_inicio &&
                            new Date(item.fecha_inicio)
                              .toLocaleDateString()
                              .includes(searchTerm)) ||
                          (item.fecha_fin &&
                            new Date(item.fecha_fin)
                              .toLocaleDateString()
                              .includes(searchTerm))
                      )
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((item, index) => (
                        <tr
                          key={index}
                          onClick={() => {
                            setSelectedNews(item);
                            setForm({
                              ...item,
                              fecha_inicio: item.fecha_inicio
                                ? item.fecha_inicio.split("T")[0]
                                : null,
                              fecha_fin: item.fecha_fin
                                ? item.fecha_fin.split("T")[0]
                                : null,
                            });
                          }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.id}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.actividad}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {item.fecha_inicio
                                ? new Date(
                                    item.fecha_inicio
                                  ).toLocaleDateString()
                                : "Sin fecha"}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {item.fecha_fin
                                ? new Date(item.fecha_fin).toLocaleDateString()
                                : "Sin fecha"}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full flex justify-center mt-12 items-center text-xl">
                <button
                  onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
                  className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`h-12 w-12 mx-1 px-3 py-2 border rounded-full ${
                      num + 1 === currentPage
                        ? "bg-itd-blue text-white transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
                        : "bg-white text-itd-blue transform transition duration-500 hover:scale-105 hover:bg-blue-700 hover:text-white"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((old) => Math.min(old + 1, totalPages))
                  }
                  className="h-14 w-14 mx-1 px-3 py-2 border rounded-full bg-white text-black transform transition duration-500 hover:scale-105 hover:bg-itd-blue hover:text-white"
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ml-4 space-y-4 animate-slideRightFadeIn">
          <h2 className="text-2xl mb-4">Noticia seleccionada</h2>
          <form className="space-y-2">
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-700">Id:</label>
              <input
                className="px-3 py-2 border rounded-md"
                type="text"
                value={form?.id || ""}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    id: e.target.value,
                  }))
                }
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-700">Actividad:</label>
              <textarea
                className="px-3 py-2 border rounded-md"
                type="text"
                value={form?.actividad || ""}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    actividad: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-700">
                Fecha inicio:
              </label>
              <input
                className="px-3 py-2 border rounded-md"
                type="date"
                value={
                  form?.fecha_inicio
                    ? new Date(form?.fecha_inicio)
                        .toISOString()
                        .substring(0, 10)
                    : ""
                }
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    fecha_inicio: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-700">Fecha fin:</label>
              <input
                className="px-3 py-2 border rounded-md"
                type="date"
                value={form?.fecha_fin ? form?.fecha_fin.split("T")[0] : ""}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    fecha_fin: e.target.value ? e.target.value : null,
                  }))
                }
              />
            </div>
            <div className="grid">
              <ButtonNotice
                color="blue"
                text="Guardar"
                onClick={(e) => {
                  e.preventDefault();
                  postCalendarData();
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ButtonNotice
                color="green"
                text="Nuevo"
                onClick={(event) => {
                  event.preventDefault();
                  setForm((prevState) => ({
                    ...prevState,
                    id: "",
                  }));
                }}
              />
              <ButtonNotice
                text="Eliminar"
                // onClick={(e) => {
                //   e.preventDefault();
                //   handleDelete();

                // }}
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteClick();
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { SectionAdmCalendar };
