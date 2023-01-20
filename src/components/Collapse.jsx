import React from "react";

function Collapse({ title, content }) {
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
        <section className="collapse__description ">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}

                <p className="collapse__arrow">&lt;</p>
            </button>
            <div className="collapse__content">
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map((equipements, index) => (
                            <li key={index} className="collapse__list-element">{equipements}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{content}</p>
                )}

            </div>
        </section>
    );
};

export default Collapse;