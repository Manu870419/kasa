import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg"

function Collapse(props) {
    const [toggleIsClosed, setToggle] = useState(false);
    function toggleIsOpen() {
        setToggle(!toggleIsClosed);
    };
    return (
<<<<<<< HEAD
        <section className="collapse">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}

                <p className="collapse__arrow">&lt;</p>
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

=======
        <>
            <div className="collapse">
                <div className="collapse__title" onClick={toggleIsOpen}>
                    <h2>{props.title}</h2>
                    <img
                        className={toggleIsClosed ? "arrow_down" : "arrow_up"}
                        src={arrow}
                        alt={toggleIsClosed
                            ? "Afficher les détails"
                            : "Cacher les détails"
                        }
                    />
                </div>
                <div className="collapse__texte">
                    <div
                        hidden={toggleIsClosed ? false : true}
                        className={toggleIsClosed ? "text-open" : "text-closed"}>
                        {props.texte}
                    </div>
                </div>
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
            </div>

        </>
    );
};

export default Collapse;