import React from "react";
import full from "../assets/redStar.svg";
import empty from "../assets/greyStar.svg";
<<<<<<< HEAD
=======

function Rating(props) {
    const rating = Number(props.value);
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53

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
=======
                        key={score.toString()}
                        className="full_star_icon"
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
                        src={full}
                        alt="étoile pleine"
                    />
                ) : (
                    <img
<<<<<<< HEAD
                        key={star.toString()}
                        className="rating__icon"
=======
                        key={score.toString()}
                        className="empty_star_icon"
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
                        src={empty}
                        alt="étoile vide"
                    />
                ))}
        </div>
    );

};

export default Rating;