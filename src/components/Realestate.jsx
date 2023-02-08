import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Houses from "../data/data.json";

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