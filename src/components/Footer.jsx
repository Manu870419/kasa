import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
import logoFooter from "../assets/logofooter.png";

function Footer() {
    const effectiveYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={logoFooter} alt="" className="footer__logo" />
            <p className="footer__text">
                &copy;
                {effectiveYear} Kasa. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;