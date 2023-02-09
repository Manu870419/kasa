import React, { useState } from "react";
import left from "../assets/arrowLeft.svg";
import right from "../assets/arrowRight.svg";

function Slider(props) {
    const pictures = props.source;
    const length = props.slidesNumber;
    const onePicture = length <= 1;

    const [current, setCurrent] = useState(0);

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
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
    );

};

export default Slider;