import React from "react";
import { useParams } from "react-router-dom";
import Houses from "../data/data.json";

import Error from "./Error";
import Slider from "../components/Slider";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";


function House() {
    const params = useParams();
    const House = Houses.find((house) => house.id === params.Id);

    if (!House) return <Error />;

    return (
        <main>
            <section className="carrousel-container" key={House.id}>
                <Slider
                    source={House.pictures}
                    slidesNumber={House.pictures.length}
                />
            </section>
            <section className="house__content">
                <div className="house__title">
                    <h1>{House.title}</h1>
                    <h2>{House.location}</h2>
                    <Tags tags={House.tags} />
                </div>
                <div className="house-host">
                    <div className="host">
                        <h2>{House.host.name}</h2>
                        <img src={House.host.picture} alt="propriétaire" />
                    </div>

                    <Rating value={House.rating} />
                </div>
            </section>

            <section className="house__dropdowns">
                <Collapse title="Description" text={House.description} />
                <Collapse
                    title="Équipements"
                    text=<ul>
                        {House.equipments.map((equipments) => (
                            <li key={equipments}>{equipments}</li>
                        ))}
                    </ul>
                />
            </section>

        </main>

    )
}

export default House;
