import React, { useState } from "react";
import left from "../assets/arrowLeft.svg";
import right from "../assets/arrowRight.svg";
<<<<<<< HEAD
=======

function Slider(props) {
    const pictures = props.source;
    const length = props.slidesNumber;
    const onePicture = length <= 1;
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53

    const [current, setCurrent] = useState(0);
<<<<<<< HEAD
    const length = slides.length;
    const onePicture = length <= 1;

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
=======

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
    };


    return (
<<<<<<< HEAD
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
=======
        <>
            <span
                className={onePicture ? "no-arrow" : "arrow arrowLeft"}
                onClick={prevSlide}>
                <img src={left} alt="previous" />
            </span>
            <span
                className={onePicture ? "no-arrow" : "arrow arrowRight"}
                onClick={nextSlide}>
                < img src={right} alt="next" />
            </span>
            <div className="slider">
                {pictures.map((picture, index) => (
                    <div key={index} className={index}>
                        {index === current && <img src={picture} alt="" />}
                    </div>
                ))}{""}
            </div>
            <span className="page-count">
                {current + 1}/{length}
            </span>
        </>
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
    );

};

export default Slider;