import React, { useState } from "react";
import left from "../assets/img/arrowLeft.svg";
import right from "../assets/img/arrowRight.svg";

function Slider({ slides }) {
    const pictures = slides;
    const length = slides.length;
    const onePicture = length <= 1;

    // on définit l'index de la 1ere slide
    const [current, setCurrent] = useState(0);

    // Si : la photos est la dernière (length -1),
    // On passe à la 1ere (0),
    // Sinon : on passe à la prochaine (+1)
    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Si: la photos est la première (0),
    // On passe à la dernière (length -1),
    // Sinon: on passe à la précédente (-1)
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
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
            <div className="slider">
                {pictures?.map((picture, index) => {
                    return (
                        <div key={index} className={index === current ? "slide slider__active-picture" : "slide slider__inactive-picture"} >
                            {index === current && (
                                <img src={picture} alt="" className="slider__picture" />
                            )}
                        </div>
                    );
                })}{""}
            </div>
            <span className="page-count">
                {current + 1}/ {length}
            </span>
        </>
    );
};

export default Slider;