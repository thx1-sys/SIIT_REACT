import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarMain.css";

const CalendarMain = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/Calendar")
      .then((response) => {
        const groupedData = groupByDate(response.data.body);
        setCalendarData(groupedData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  function groupByDate(data) {
    return data.reduce((acc, item) => {
      const date = new Date(item.fecha_inicio).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});
  }

  function handleDateClick(value) {
    setSelectedDate(value);
  }

  return (
    <div className="w-full h-auto p-10 text-black bg-gradient-linear-white">
      <h1 className="text-4xl mb-10 font-extrabold text-center font-yeseva animate-slideDownFadeIn">
        Calendario Escolar
      </h1>
      <div className="p-10 rounded grid grid-cols-2 gap-12">
        <Calendar
          className="custom-calendar w-full h-full rounded-xl font-bold hover:scale-105 transform transition duration-500 hover:shadow-xl animate-slideLeftFadeIn" // Add custom-calendar class
          locale="es-ES" // set locale to Spanish
          onClickDay={handleDateClick}
          tileContent={({ date, view }) => {
            const activities = calendarData[date.toDateString()];
            return view === "month" && activities ? (
              <div className="flex flex-col items-center justify-start h-full ">
                <p className="text-xs text-itd-blue font-light ">
                  {activities[0].actividad} {/* Display the title */}
                </p>
              </div>
            ) : null;
          }}
        />
        {selectedDate && calendarData[selectedDate.toDateString()] && (
          <div className="mt-10 grid  items-center justify-center m-auto animate-slideRightFadeIn">
            <h2 className="text-2xl mb-5 font-semibold">
              Actividades para {selectedDate.toLocaleDateString()}:
            </h2>
            {calendarData[selectedDate.toDateString()].map((activity) => (
              <p key={activity.id} className="text-gra">
                {activity.actividad}
              </p>
            ))}
            <img
              src="../../src/assets/images/Uni1_Campus_View.jpeg"
              alt="Imagen del ITD fachada"
              className="rounded-xl mt-4 hover:scale-105 transform transition duration-500 hover:shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { CalendarMain };
