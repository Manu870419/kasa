import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
import Logo from "../assets/logo.svg";

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/" className="navbar__links__style">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__links__style">
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;