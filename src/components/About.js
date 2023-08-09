import React from "react";

const About = ({ tree }) => {
    return (
        <div className="about-div">
            <h1>{tree.type}</h1>
            <img src={tree.img.img} alt="Image" />
            <img src="tree.img.leafImg" alt="Leaf Image" />
            <p>{tree.about.Name}</p>
            <p>{tree.about.NativeTo}</p>
            <p>{tree.about.Height}</p>
            <p>{tree.about.Lifespan}</p>
            <p>{tree.about.FunFact}</p>
        </div>
    )
}

export default About;