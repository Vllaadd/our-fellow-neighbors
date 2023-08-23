import React, { useState, useEffect } from 'react';
import './css/HomeFish.css';
import AboutFish from "./AboutFish";
import welcomeFish from '../assets/welcome-fish.jpeg';

const HomeFish = ({ fish }) => {
    const [fishQuery, setFishQuery] = useState("")
    const [filteredFish, setFilteredFish] = useState([]);
    const [selectedFish, setSelectedFish] = useState(null);

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
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img className='welcome-fish' src={welcomeFish} />
                <div className="fish-about">
                            {selectedFish && <AboutFish fishie={selectedFish}/>}
                        </div>
                </div>
                <div className="col-md-6">
                <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Find Your Fish" aria-label="Find Your Fish" aria-describedby="button-addon2" onChange={handleFishSearch} value={fishQuery}></input>
                    </div>
                    <div className="fish-list">
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