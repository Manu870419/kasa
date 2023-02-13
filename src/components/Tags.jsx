import React from "react";

<<<<<<< HEAD
function Tags({ getTag }) {
    return (
        <div className="tag">
            <p className="tag__text">{getTag}</p>
        </div>
=======
function Tags(props) {
    const tags = props.tags;
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
>>>>>>> 443709254f5b852baf2c6944966c4d26dd9e2d53
    );
};

export default Tags;