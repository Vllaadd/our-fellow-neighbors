import React from "react";

const About = ({ tree }) => {
    return (
        <div className="about-div">
            <h1>{tree.type}</h1>
            <img src={tree.img.img} alt="Image" />
            <img src="tree.img.leafImg" alt="Leaf Image" />
            <p><strong>Name:</strong>{tree.about.Name}</p>
            <p><strong>Native To:</strong>{tree.about.NativeTo}</p>
            <p><strong>Height:</strong>{tree.about.Height}</p>
            <p><strong>Lifespan:</strong>{tree.about.Lifespan}</p>
            <p><strong>Fun Fact:</strong>{tree.about.FunFact}</p>
        </div>
    )
}

export default About;