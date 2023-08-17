import React from "react";

const AboutMammal = ({mammal}) => {
    return (
        <div>
            <h1>{mammal.name}</h1>
            <img className="tree-img" src={mammal.img} alt="Tree" />
            <p><strong>Name:</strong>{mammal.name}</p>
            <p><strong>Life Span:</strong>{mammal.lifeSpan}</p>
            <p><strong>Life Cycle:</strong>{mammal.lifeCycle}</p>
            <p><strong>Diet:</strong>{mammal.diet}</p>
            <p><strong>Fun Fact:</strong>{mammal.funFact}</p>
        </div>
    )
}

export default AboutMammal;