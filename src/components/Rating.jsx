import React from "react";

// Style
import redstar from "../design/redstar.svg";
import greystar from "../design/greystar.svg";

function Rating ({ rating}) {
    const stars = [1, 2, 3, 4, 5];

    return(
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {stars.map((star) =>
            rating >= star ? (
                <img 
                key={star.toString()}
                className="rating__icon"
                src={redstar}
                alt=""
                /> 
            ) : (
                <img
                key={star.toString()}
                className="rating__icon"
                src={greystar}
                alt=""
                />
            ))}
        </div>
    );

};

export default Rating;