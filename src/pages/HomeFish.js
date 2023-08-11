import React from "react";
import AboutFish from "./AboutFish";

const HomeFish = ({ fish }) => {
    const [fishQuery, setFishQuery] = useState("")
    const [filteredFish, setFilteredFish] = useState([]);
    const [selectedFish, setSelectedFish] = useState(null);

    const handleFishSearch = (event) => {
        setFishQuery(event.target.value);

        const filteredFish = fish.filter((fishData) => 
            fishData.type.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setFilteredFish(filteredFish);
    };

    const handleFishClick = (fish) => {
        setSelectedFish(selectedFish => { selectedFish === fish ? null : fish});
        <AboutFish />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Find Your Fish" aria-label="Find Your Fish" aria-describedby="button-addon2" onChange={handleFishSearch} value={fishQuery}></input>
                    </div>
                    <div className="fish-list">
                            <ul className="list-group">
                                {filteredFish.map((fish, index) => (
                                    <li key={index} className="list-group-item" onClick={() => handleFishClick(fish)}>{fish.name}</li>
                                ))}
                            </ul>
                        </div>
                </div>
                <div className="col-md-6">
                <div className="fish-about">
                            {selectedFish && <AboutFish fish={selectedFish}/>}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFish;