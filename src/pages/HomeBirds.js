import React, { useState, useEffect} from "react";
import AboutBird from "./AboutBird";
import "../pages/HomeBirds.css";

const HomeBirds = ({birds}) => {
    const [birdsQuery, setBirdsQuery] = useState("");
    const [filteredBirds, setFilteredBirds] = useState([]);
    const [selectedBirds, setSelectedBirds] = useState(null);

    useEffect(() => {
        setFilteredBirds(birds);
    }, [birds]);

    const handleBirdsSearch = (b) =>{
        setBirdsQuery(b.target.value);

        const filteredBirds = birds.filter((bird)=>
            bird.name.toLowerCase().includes(b.target.value.toLowerCase())
        )
        setFilteredBirds(filteredBirds);
    };

    const handleBirdsClick = (bird) => {
        setSelectedBirds(selectedBirds =>(selectedBirds === bird ? null : bird));
    }
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Find Your Bird" aria-label="Find Your Bird" aria-describedby="button-addon2" onChange={handleBirdsSearch} value={birdsQuery}></input>
                </div>
                <div className="bird-list">
                        <ul className="list-group">
                            {filteredBirds.map((bird, index) => (
                                <li key={index} className="list-group-item" onClick={() => handleBirdsClick(bird)}>{bird.name}</li>
                            ))}
                        </ul>
                    </div>
            </div>
            <div className="col-md-6">
            <div className="bird-about">
                        {selectedBirds && <AboutBird bird={selectedBirds}/>}
                    </div>
            </div>
        </div>
    </div>
    )
}

export default HomeBirds;
