import React from "react";
import Vector from "../assets/Vector.svg";

function Collapse({ title, description, equipements }) {
    const isCollapse = (e) => {
        e.preventDefault();
        const divText = e.target.nextSibling;
        const arrow = e.target.lastChild;
        if (!divText.classList.contains("show")) {
            divText.classList.add("show");
            arrow.classList.add("rotate");
        } else {
            divText.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    };
    return (
        <section className="collapse">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}
                <img src={Vector} alt="" className="collapse__arrow" />
            </button>
            <div className="collapse__content">
                {Array.isArray(equipements) ? (
                    <ul className="collapse__list">
                        {equipements?.map((equipements, index) => (
                            <li key={index} className="collapse__list-element">{equipements}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{description} </p>
                )}

            </div>

        </section>
    );
};

export default Collapse;