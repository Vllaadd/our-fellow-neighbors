import React from "react";
import './css/AboutFacts.css';

const AboutBird = ({ bird }) => {
    return (
        <>
            <div className="welcome-image">
                <img className="about-img" src={bird.img} alt="Bird" />
            </div>
            <div className="about-facts">
                <h1>{bird.name}</h1>
                <p><strong>Name:</strong>{bird.name}</p>
                <p><strong>Migration:</strong>{bird.migration}</p>
                <p><strong>Reproduction:</strong>{bird.reproduction}</p>
                <p><strong>Conservation Status:</strong>{bird.conservationStatus}</p>
                <p><strong>Fun Fact:</strong>{bird.funFact}</p>
            </div>
        </>
    )
}

export default AboutBird;