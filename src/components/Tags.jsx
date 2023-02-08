import React from "react";

function Tags(props) {
    const tags = props.tags;
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;