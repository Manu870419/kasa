import React from "react";
import { useState } from "react";

// style
import arrowLeft from "../design/arrowLeft.svg";
import arrowRight from "../design/arrowRight.svg";

function Slider ({ slides }) {
    const [current, setCurrent] = useState(0);
    const lenght = slides.lenght;

    function nextSlide(){
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    };
    function prevSlide(){
        setCurrent(current === 0 ? lenght - 1 : current -1);
    };

    return(
        <div className="slider">
            {slides.map((picture, index) => {
                return(
                    <div key={index} className={index === current ? "slide slider__active-picture" : "slide slider__inactive-picture"} >
                        {index === current && (
                            <img src={picture} alt="" className="slider__picture" />
                        )}
                    </div>
                );
            })}
            {/* Obtenir le buton s'il y a plus d'une photo */}
            {lenght > 1 ? (
                <>
                  <div className="slider__previous" onClick={prevSlide}>
                    <img src={arrowLeft} alt="" className="slide__previous-icon" />
                  </div>
                  <div className="slide__next" onClick={nextSlide}>
                    <img src={arrowRight} alt="" className="slider__next-icon" />       
                  </div>
                </>
            ) : null}
        </div>
    );
};

export default Slider;