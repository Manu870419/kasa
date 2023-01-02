import React from "react";

function Collapse ({ title, content}) {
    const isCollapse = (e) => {
        e.preventDefault();
        const divText = e.target.nextSibbling;
        const arrow = e.target.lastchild;

        if (!divText.classList.contains("show")){
            console.log(divText.classList)
            divText.classList.add("show");
            arrow.classList.add("rotate");
        }else{
            divText.classList.remove("show");
            arrow.classList.remove("show");
        }
    };
    return (
        <div className="collapse">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}
                <p className="collapse__arrow">&lt;</p>
            </button>
            <div className="collapse__content">
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map(( equipement, index) => (
                            <li key={index} className="collapse__list-element">
                                {equipement}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{content}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;