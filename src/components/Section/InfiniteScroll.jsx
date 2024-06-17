import React, { useState } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <a
      href="/careers"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`wrapper ${isPaused ? "paused" : ""}`}>
        <div className="itemLeft item1">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/arq.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item2">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/civ.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item3">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/ele.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item4">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/emp.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item5">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/inf.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item6">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/arq.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item7">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/civ.png" className="w-20" />
          </div>
        </div>
        <div className="itemLeft item8">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/ele.png" className="w-20" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="itemRight item1">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/arq.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item2">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/civ.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item3">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/ele.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item4">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/emp.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item5">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/inf.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item6">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/arq.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item7">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/civ.png" className="w-20" />
          </div>
        </div>
        <div className="itemRight item8">
          <div className="w-full h-full grid items-center justify-center">
            <img src="../src/assets/images/carreras/ele.png" className="w-20" />
          </div>
        </div>
      </div>
    </a>
  );
};

export { InfiniteScroll };
