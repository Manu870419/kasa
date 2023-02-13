import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
<<<<<<< HEAD
import products from "../data/data.json";
=======
import Houses from "../data/data.json";
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53

const Realestate = () => {
    return (
        <section className="home__houses">
            {Houses.map((House) => {
                return (
                    <article key={House.id}>
                        <Link to={`/Houses/${House.id}`}>
                            <Cards image={House.cover} title={House.title} />
                        </Link>
                    </article>
                );
            })}
        </section>
    );
};

export default Realestate;