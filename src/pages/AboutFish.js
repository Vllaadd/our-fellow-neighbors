import React from "react";

const AboutFish = ({fishie}) => {
    return (
        <div>
            <h1>{fishie.name}</h1>
            <p><strong>Name:</strong>{tree.about.Name}</p>
            <p><strong>Behavior and Diet:</strong>{fishie.behaviorAndDiet}</p>
            <p><strong>Life Span:</strong>{fishie.Lifespan}</p>
            <p><strong>Lifespan:</strong>{fishie.reproductionAndLifeCycle}</p>
            <p><strong>Fun Fact:</strong>{fishie.funFact}</p>
        </div>
    )
}

export default AboutFish;