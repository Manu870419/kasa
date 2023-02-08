import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg"

function Collapse(props) {
    const [toggleIsClosed, setToggle] = useState(false);
    function toggleIsOpen() {
        setToggle(!toggleIsClosed);
    };
    return (
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
            </div>

        </>
    );
};

export default Collapse;