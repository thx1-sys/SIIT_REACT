import React, { useEffect, useState } from "react";
import axios from "axios";
import { SliderHome } from "../Section/SliderHome";
import { InfiniteScroll } from "../Section/InfiniteScroll";
import "./MainHome.css";

function MainHome() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/aviso")
      .then((response) => {
        if (response.data && Array.isArray(response.data.body)) {
          const filteredImages = response.data.body.filter(
            (image) => image.estado === 1
          );
          setImages(filteredImages); // Guardar los datos en el estado
        } else {
          console.error("Error: la respuesta de la API no es un array");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="content-home-conent">
        {/* <div className="container-inf-uni">
          <SectionInfCarr />
        </div> */}
        <div className="container-main--slider">
          <p className="text-black font-extrabold text-3xl w-8/10 m-auto mt-12 font-yeseva">
            Carreras
          </p>
          <InfiniteScroll />
          <div className="w-8/10 m-auto mt-12">
            <h2 className="text-black font-extrabold text-3xl mb-8 font-yeseva">
              Avisos
            </h2>
            <SliderHome>
              {images.map((image, index) => {
                return (
                  <img key={index} src={image.url} alt={`Aviso ${index + 1}`} />
                );
              })}
            </SliderHome>
          </div>
        </div>
      </div>
    </>
  );
}

export { MainHome };
