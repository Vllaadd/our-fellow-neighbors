import React from "react";
import '../components/About.css'

const About = ({ tree }) => {
    return (
        <div className="about-div">
            <h1>{tree.type}</h1>
            <img className="about-img" src={tree.img.img} alt="Tree" />
            <img className="about-img" src={tree.img.leafImg} alt="Leaf" />
            <p><strong>Name:</strong>{tree.about.Name}</p>
            <p><strong>Native To:</strong>{tree.about.NativeTo}</p>
            <p><strong>Height:</strong>{tree.about.Height}</p>
            <p><strong>Lifespan:</strong>{tree.about.Lifespan}</p>
            <p><strong>Fun Fact:</strong>{tree.about.FunFact}</p>
        </div>
    )
}

export default About;