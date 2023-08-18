import React from "react";

const AboutBird = () =>{
    return(
        <div>
            <h1>{bird.name}</h1>
            <img className="bird-img" src={bird.img} alt="Tree" />
            <p><strong>Name:</strong>{bird.name}</p>
            <p><strong>Migration:</strong>{bird.migration}</p>
            <p><strong>Reproduction:</strong>{bird.reproduction}</p>
            <p><strong>Conservation Status:</strong>{bird.conservationStatus}</p>
            <p><strong>Fun Fact:</strong>{bird.funFact}</p>
        </div>
    )
}

export default AboutBird;