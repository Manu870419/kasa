import React from "react";
import { useParams } from "react-router-dom";
import Houses from "../__provisional__/data.json";

import Error from "./Error";
import Rating from "../components/Rating";
import Carousel from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";



function House() {
    const params = useParams();
    const House = Houses.find((house) => house.id === params.Id);

    if (!House) return <Error />;

    return (
        <main>
            < section className="carrousel__container" key={House.id}>
                <Carousel
                    source={House.pictures}
                    slidesNumber={House.pictures.length} />
            </section>
            <section className="house__container">
                <div className="house__title">
                    <h1 >{House.title}</h1>
                    <h2>{House.location}</h2>
                    <Tags tags={House.tags} />
                </div>
                <div className="house__host">
                    <div className="host">
                        <h2>{House.host.name}</h2>
                        <img src={House.host.picture} alt="Propriétaire" />
                    </div>
                    <Rating value={House.rating} />
                </div>
            </section>
            <section className="house__collapse">
                <Collapse title="description" text={House.description} />
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