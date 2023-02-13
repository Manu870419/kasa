import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
import marketdata from "../data/aboutData";
import Mainbanner from "../components/Mainbanner";
import image from "../assets/img/banner.png";
import Realestate from "../components/Realestate";

const slogan = marketdata.slogan;

const Home = () => {
    return (
        <main className="main">
            <Mainbanner image={image} title={slogan} />
            <Realestate />
        </main>
    );
};

export default Home;