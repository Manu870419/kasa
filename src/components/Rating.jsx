import React from "react";

// Style
import redStar from "../assets/img/redStar.svg";
import greyStar from "../assets/img/greyStar.svg";

const fullRating = [1, 2, 3, 4, 5];

return (
    <div className="rating">
        {/* Boucle pour afficher l'étoile par note*/}
        {fullRating.map((score) =>
            rating >= score ? (
                <img
<<<<<<< HEAD
                    key={star.toString()}
                    className="rating__icon"
                    src={redStar}
                    alt=""
                />
            ) : (
                <img
<<<<<<< HEAD
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