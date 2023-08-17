import React, { useState } from 'react';
import AboutFish from "./AboutFish";

const HomeFish = ({ fish }) => {
    console.log(fish[1].name);
    const [fishQuery, setFishQuery] = useState("")
    const [filteredFish, setFilteredFish] = useState([]);
    const [selectedFish, setSelectedFish] = useState(null);

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
                <div className="col-md-6">
                <div className="fish-about">
                            {selectedFish && <AboutFish fishie={selectedFish}/>}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFish;