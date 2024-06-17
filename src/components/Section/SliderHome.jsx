import React, { useState, useEffect } from "react";

import "./SliderHome.css";

function SliderHome({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 10000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <>
      <div>
        <div
          className="container__slider shadow-2xl hover:scale-105 transform transition duration-300"
          onMouseEnter={AutoPlayStop}
          onMouseLeave={AutoPlayStart}
        >
          {children.map((item, index) => {
            return (
              <div
                className="slider__item"
                key={index}
                style={{ "--translateX": `${-100 * activeIndex}%` }}
              >
                {item}
              </div>
            );
          })}
          <div className="container__slider__links shadow-mod">
            {children.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    activeIndex === index
                      ? "container__slider__links-small container__slider__links-small-active"
                      : "container__slider__links-small"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                ></button>
              );
            })}
          </div>

          <button
            className="slider__btn-next h-screen hover:bg-gray-300 hover:bg-opacity-30 fill-white hover:fill-blue-950 transition-all duration-500 ease-in-out hover:backdrop-blur-lg"
            onClick={(e) => {
              e.preventDefault();
              slideNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 shadow-mod"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .10l-.06 .10l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.10l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.10 -.053l-.10 -.06l-.004 -.057l-.002 -12.059z" />
            </svg>
          </button>
          <button
            className="slider__btn-prev h-screen hover:bg-gray-300 hover:bg-opacity-30 fill-white hover:fill-blue-950 transition-all duration-500 ease-in-out hover:backdrop-blur-lg"
            onClick={(e) => {
              e.preventDefault();
              slidePrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 shadow-mod"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .10l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.10 .053l.10 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.10l.06 -.10z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export { SliderHome };
