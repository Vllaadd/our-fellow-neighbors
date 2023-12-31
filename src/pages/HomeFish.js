import React, { useState, useEffect } from 'react';
import './css/HomeAnimals.css';
import AboutFish from "./AboutFish";
import welcomeFish from '../assets/welcome-fish.jpeg';

const HomeFish = ({ fish }) => {
    const [fishQuery, setFishQuery] = useState("")
    const [filteredFish, setFilteredFish] = useState([]);
    const [selectedFish, setSelectedFish] = useState(null);
    const [showAboutFish, setShowAboutFish] = useState(false);

    useEffect(() => {
        setFilteredFish(fish);
    }, [fish]);

    const handleFishSearch = (x) => {
        setFishQuery(x.target.value);

        const filteredFish = fish.filter((fishie) =>
            fishie.name.toLowerCase().includes(x.target.value.toLowerCase())
        )
        setFilteredFish(filteredFish);
    };

    const handleFishClick = (fishie) => {
        setSelectedFish(selectedFish => (selectedFish === fishie ? null : fishie));
        setShowAboutFish(true)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {showAboutFish ? (
                        <AboutFish fishie={selectedFish} />
                    ) : (
                        <div className='animal-about'>
                            <img className='animal-image' src={welcomeFish} />
                            <p className='animal-text'>New Yorkers are fortunate to be surrounded by water. Wherever you are in NYC,
                                you are close to some body of water — the Hudson River, East River, Upper New York Bay,
                                Jamaica Bay, Gowanus Canal, Flushing Bay, the Atlantic Ocean, just to name a few. The list
                                on this page is only a part of the final compilation of all the fish species that
                                live in waters of our magnificent city. Please take the time to explore.
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Find Your Fish" aria-label="Find Your Fish" aria-describedby="button-addon2" onChange={handleFishSearch} value={fishQuery}></input>
                    </div>
                    <div className="animal-list">
                        <ul className="list-group">
                            {filteredFish.map((fishie, index) => (
                                <li key={index} className="list-group-item" onClick={() => handleFishClick(fishie)}>{fishie.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeFish;