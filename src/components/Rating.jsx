import React from "react";
import full from "../assets/redStar.svg";
import empty from "../assets/greyStar.svg";

function Rating(props) {
    const rating = Number(props.value);

    const fullRating = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile par note*/}
            {fullRating.map((score) =>
                rating >= score ? (
                    <img
                        key={score.toString()}
                        className="full_star_icon"
                        src={full}
                        alt="étoile pleine"
                    />
                ) : (
                    <img
                        key={score.toString()}
                        className="empty_star_icon"
                        src={empty}
                        alt="étoile vide"
                    />
                ))}
        </div>
    );

};

export default Rating;