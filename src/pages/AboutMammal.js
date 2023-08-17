import React from "react";

const AboutMammal = ({mammal}) => {
    return (
        <div>
            <h1>{mammal.name}</h1>
            <img className="tree-img" src={mammal.img} alt="Tree" />
            <p><strong>Name:</strong>{mammal.name}</p>
            <p><strong>Life Span:</strong>{mammal.Lifespan}</p>
            <p><strong>Life Cycle:</strong>{mammal.LifeCycle}</p>
            <p><strong>Diet:</strong>{mammal.Diet}</p>
            <p><strong>Fun Fact:</strong>{mammal.FunDact}</p>
        </div>
    )
}

export default AboutFish;