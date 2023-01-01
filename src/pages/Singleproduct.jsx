/* eslint-disable react/jsx-no-undef */
import { useParams } from "react-router-dom";
import products from "../__provisional__/data.json";

function SingleProduct (){
    const {productId} =useParams();
    const product = products.find((product) => product.id === productId);
    const { title, location, rating, host, equipements, description, pictures} = product;

    return(
        <div className="singleproduct">
            <Slider slides={pictures} />
            <div className="singleproduct__content">
                <div className="singleproduct__informations">
                    <h1 className="singleproduct__title">{title}</h1>
                    <p className="singleproduct__location">{location}</p>
                    <div className="singleproduct__tags">
                        {product.tags.map((tag, index) =>(
                            <Tags key={index} getTag={tag} />
                        ))}
                    </div>
                </div>
                <div className="singleproduct__rating-and-host">
                    <Rating rating={rating} />
                    <Server host={host} />
                </div>
            </div>
            <div className="singleproduct__dropdowns">
                <Collapse title="description" content={description} />
                <Collapse title="équipement" content={equipements} />
            </div>
        </div>
    
    )
}

export default SingleProduct;