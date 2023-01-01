import React from "react";
import { Link } from "react-router-dom";

//style 
import Logo from "../design/logo.svg";

function Navbar () {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={Logo} alt="Logo" className="nav__img" />
            </Link>
            <div>
                <Link className="nav__link" to="/">
                    Acceuil
                </Link>
                <Link className="nav__link" to="/about">
                    A propos
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;