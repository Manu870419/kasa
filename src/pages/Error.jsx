import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <main className="error">
            <div className="error__content">
                <p className="error__number">404</p>
                <p className="error__text">
                    " Oups ! La page que vous demandez n'existe pas."

                </p>
            </div>
            <Link to="/" className="error__link">
                Retourner sur la page d'acceuil
            </Link>
        </main>
    );
};

export default Error;