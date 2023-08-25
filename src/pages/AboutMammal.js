import React from "react";
import './css/AboutFacts.css';

const AboutMammal = ({mammal}) => {
    return (
        <>
         <div className="welcome-image">
            <img className="about-img" src={mammal.img} alt="Tree" />
        </div>
        <div className="about-facts">
            <h1>{mammal.name}</h1>
            <p><strong>Name:</strong>{mammal.name}</p>
            <p><strong>Life Span:</strong>{mammal.lifeSpan}</p>
            <p><strong>Life Cycle:</strong>{mammal.lifeCycle}</p>
            <p><strong>Diet:</strong>{mammal.diet}</p>
            <p><strong>Fun Fact:</strong>{mammal.funFact}</p>
        </div>
        </>
       
    )
}

export default AboutMammal;