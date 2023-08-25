import React from "react";
import './css/AboutTrees.css';
import './css/AboutFacts.css';

const AboutTrees = ({ tree }) => {
    return (
        <>
            <div>
                <img className="tree-img" src={tree.img.img} alt="Tree" />
                <img className="tree-img" src={tree.img.leafImg} alt="Leaf" />
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