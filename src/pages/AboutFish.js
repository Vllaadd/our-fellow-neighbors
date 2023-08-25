import React from "react";
import './css/AboutFacts.css';

const AboutFish = ({ fishie }) => {
    return (
        <>
            <div>
                <img className="about-img" src={fishie.img} alt="Tree" />
            </div>
            <div className="about-facts">
                <h1>{fishie.name}</h1>
                <p><strong>Name:</strong>{fishie.name}</p>
                <p><strong>Behavior and Diet:</strong>{fishie.behaviorAndDiet}</p>
                <p><strong>Life Span:</strong>{fishie.lifeSpan}</p>
                <p><strong>Lifespan:</strong>{fishie.reproductionAndLifeCycle}</p>
                <p><strong>Fun Fact:</strong>{fishie.funFact}</p>
            </div>
        </>
    )
}

export default AboutFish;