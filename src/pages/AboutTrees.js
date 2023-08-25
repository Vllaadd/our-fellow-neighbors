import React from "react";
import './css/AboutFacts.css';

const AboutTrees = ({ tree }) => {
    return (
        <>
            <div className="welcome-image">
                <img className="about-img" src={tree.img.img} alt="Tree" />
                <img className="about-img" src={tree.img.leafImg} alt="Leaf" />
            </div>
            <div className="about-facts">
                <h1>{tree.type}</h1>
                <p><strong>Name:</strong>{tree.about.Name}</p>
                <p><strong>Native To:</strong>{tree.about.NativeTo}</p>
                <p><strong>Height:</strong>{tree.about.Height}</p>
                <p><strong>Lifespan:</strong>{tree.about.Lifespan}</p>
                <p><strong>Fun Fact:</strong>{tree.about.FunFact}</p>
            </div>
        </>
    )
}

export default AboutTrees;