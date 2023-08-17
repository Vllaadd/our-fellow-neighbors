import React from "react";

const AboutFish = ({fishie}) => {
    return (
        <div>
            <h1>{fishie.name}</h1>
            <img className="tree-img" src={fishie.img} alt="Tree" />
            <p><strong>Name:</strong>{fishie.name}</p>
            <p><strong>Behavior and Diet:</strong>{fishie.behaviorAndDiet}</p>
            <p><strong>Life Span:</strong>{fishie.lifeSpan}</p>
            <p><strong>Lifespan:</strong>{fishie.reproductionAndLifeCycle}</p>
            <p><strong>Fun Fact:</strong>{fishie.funFact}</p>
        </div>
    )
}

export default AboutFish;