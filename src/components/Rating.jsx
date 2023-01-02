import React from "react";

// Style
import redStar from "../design/redStar.svg";
import greyStar from "../design/greyStar.svg";

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
                src={redStar}
                alt=""
                /> 
            ) : (
                <img
                key={star.toString()}
                className="rating__icon"
                src={greyStar}
                alt=""
                />
            ))}
        </div>
    );

};

export default Rating;