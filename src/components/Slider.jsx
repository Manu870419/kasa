import React, { useState } from "react";
import left from "../assets/arrowLeft.svg";
import right from "../assets/arrowRight.svg";

function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const onePicture = length <= 1;

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slider">
            {slides?.map((picture, index) => {
                return (
                    <div key={index} className={index === current ? "slide slider__active-picture" : "slide slider__inactive-picture"} >
                        {index === current && (
                            <img src={picture} alt="" className="slider__picture" />
                        )}{""}
                    </div>
                );
            })}
            {/* Obtenir le buton s'il y a plus d'une photo */}
            {length > 1 ? (
                <>
                    <span
                        className={onePicture ? "no-arrow" : "arrow arrowLeft"}
                        onClick={prevSlide}>
                        <img src={left} alt="previous" />
                    </span>
                    <span
                        className={onePicture ? "no-arrow" : "arrow arrowRight"}
                        onClick={nextSlide}>
                        <img src={right} alt="next" />
                    </span>
                    <span className="page-count">
                        {current + 1}/ {length}
                    </span>
                </>
            ) : null}
        </div>
    );
};

export default Slider;