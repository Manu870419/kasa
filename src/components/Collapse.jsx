import React, { useState } from "react";
import arrow from "../assets/arrowdown.svg";

function Collapse(props) {
    const [toggleIsClosed, setToggle] = useState(false);
    function toggleIsOpen() {
        setToggle(!toggleIsClosed)
    }
    return (
        <div className="collapse">
            <div className="collapse__title" onClick={toggleIsOpen}>
                <h2>{props.title}</h2>
                <img
                    className={toggleIsClosed ? "arrowdown" : "arrow-up"}
                    src={arrow}
                    alt={toggleIsClosed
                        ? "Afficher les détails"
                        : "Cacher les détails"
                    }
                />
            </div>
            <div className="collapse__text">
                <div
                    hidden={toggleIsClosed ? false : true}
                    className={
                        toggleIsClosed ? "text-open" : "text-closed"
                    }>
                </div>
            </div>
        </div>
    );
};

export default Collapse;