import React from "react";
import redStar from "../assets/img/redStar.svg";
import greyStar from "../assets/img/greyStar.svg";

function Rating({ rating }) {

    const fullRating = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {fullRating.map((score) =>
                rating >= score ? (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={redStar}
                        alt=""
                    />
                ) : (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={greyStar}
                        alt=""
                    />
                ))}
        </div>
    );
}

export default Rating;