import React, { useState, useEffect } from "react";
import { NoticeCardStudent } from "../Card/NoticeCardStudent";

const StudentNotices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/anuncios/")
      .then((response) => response.json())
      .then((data) => setNotices(data.body))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-8/10 h-40vh mt-4 grid items-center m-auto">
      <h3 className="text-2xl font-bold mb-4 p-0 m-0 animate-slideLeftFadeIn">
        Anuncios
      </h3>
      <div className="grid grid-cols-3 items-center justify-center mb-8 gap-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="self-center place-self-center animate-slideUpFadeIn"
          >
            <NoticeCardStudent title={notice.title} inf={notice.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { StudentNotices };
