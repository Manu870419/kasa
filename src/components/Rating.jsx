import React from "react";
import full from "../assets/redStar.svg";
import empty from "../assets/greyStar.svg";

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={full}
                        alt="étoile pleine"
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={empty}
                        alt="étoile vide"
                    />
                ))}
        </div>
    );

};

export default Rating;