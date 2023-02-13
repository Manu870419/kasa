import React from "react";

function Collapse({ title, description, equipments }) {
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

                <p className="collapse__arrow">&lt;</p>
            </button>
            <div className="collapse__content">
                {Array.isArray(equipments) ? (
                    <ul className="collapse__list">
                        {equipments.map((equipments, index) => (
                            <li key={index} className="collapse__list-element">{equipments}</li>
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