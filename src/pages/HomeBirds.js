import React, { useState, useEffect } from "react";
import AboutBird from "./AboutBird";
import "../pages/css/HomeBirds.css";
import welcomeBirds from '../assets/welcome-birds.avif';

const HomeBirds = ({ birds }) => {
    const [birdsQuery, setBirdsQuery] = useState("");
    const [filteredBirds, setFilteredBirds] = useState([]);
    const [selectedBirds, setSelectedBirds] = useState(null);

    useEffect(() => {
        setFilteredBirds(birds);
    }, [birds]);

    const handleBirdsSearch = (b) => {
        setBirdsQuery(b.target.value);

        const filteredBirds = birds.filter((bird) =>
            bird.name.toLowerCase().includes(b.target.value.toLowerCase())
        )
        setFilteredBirds(filteredBirds);
    };

    const handleBirdsClick = (bird) => {
        setSelectedBirds(selectedBirds => (selectedBirds === bird ? null : bird));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="animal-about">
                        <img className='animal-image' src={welcomeBirds} alt="birds on a wire" />
                        <p className="animal-text">Please explore some of the bird species found in New York and know that this list is not final.
                            Over 400 bird species has been recorded in New York City. This includes
                            both resident bird species and those that migrate through the area during different
                            seasons.
                        </p>
                        {selectedBirds && <AboutBird bird={selectedBirds} />}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Find Your Bird" aria-label="Find Your Bird" aria-describedby="button-addon2" onChange={handleBirdsSearch} value={birdsQuery}></input>
                    </div>
                    <div className="animal-list">
                        <ul className="list-group">
                            {filteredBirds.map((bird, index) => (
                                <li key={index} className="list-group-item" onClick={() => handleBirdsClick(bird)}>{bird.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeBirds;
