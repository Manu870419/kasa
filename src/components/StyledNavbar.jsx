import { NavLink } from "react-router-dom";

// Style
import Logo from "../design/logo.svg";

function StyledNavbar() {
    return(
        <nav className="navbar">
            <NavLink to="/">
                <img src={Logo} atl="Logo" className="navbar__img" />
            </NavLink>
            <div className="navbar__links">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navbar__links--active" : "navbar__links--inactive"
                }
                >Accueil
                </NavLink>
                <NavLink
                   to="/about"
                   className={({ isActive }) => 
                     isActive ? "navbar__links--active" : "navbar__links--inactive"
                }
                >A Propos
                </NavLink>
            </div>
        </nav>
    );
};
export default StyledNavbar;