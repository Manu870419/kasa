import React from "react";
import redStar from "../assets/img/redStar.svg";
import greyStar from "../assets/img/greyStar.svg";

function Rating(props) {
    const rating = Number(props.value)
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {stars.map((score) =>
                rating >= score ? (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={redStar}
                        alt="étoile pleine"
                    />
                ) : (
                    <img
                        key={score.toString()}
                        className="rating__icon"
                        src={greyStar}
                        alt="étoile vide"
                    />
                ))}
        </div>
    );

};

export default Rating;