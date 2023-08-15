import React from "react";
import '../pages/AboutTrees.css'

const About = ({ treeData }) => {
    return (
        <div className="about-div">
            <h1>{treeData.type}</h1>
            <img className="tree-img" src={treeData.img.img} alt="Tree" />
            <img className="tree-img" src={treeData.img.leafImg} alt="Leaf" />
            <p><strong>Name:</strong>{treeData.about.Name}</p>
            <p><strong>Native To:</strong>{treeData.about.NativeTo}</p>
            <p><strong>Height:</strong>{treeData.about.Height}</p>
            <p><strong>Lifespan:</strong>{treeData.about.Lifespan}</p>
            <p><strong>Fun Fact:</strong>{treeData.about.FunFact}</p>
        </div>
    )
}

export default About;