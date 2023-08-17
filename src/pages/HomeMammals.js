import React, { useState, useEffect } from 'react';
import AboutMammal from './AboutMammal';


const HomeMammals = ({mammals}) => {
    console.log(mammals[0].name);
    const [mammalQuery, setMammalQuery] = useState("");
    const[filteredMammals, setFilteredMammals] = useState([]);
    const[selectedMammals, setSelectedMammals] = useState(null);

    useEffect(() => {
        setFilteredMammals(mammals);
    }, [mammals]);

    const handleMammalSearch = (m) =>{
        setMammalQuery(m.target.value);

        const filteredMammals = mammals.filter((mammal)=>
        mammal.name.toLowerCase().includes(m.target.value.toLowerCase())
        )
        setFilteredMammals(filteredMammals);
    };

    const handleMammalClick =(mammal) =>{
        setSelectedMammals(selectedMammals => (selectedMammals === mammal ? null : mammal));
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Find Your Mammal" aria-label="Find Your Mammal" aria-describedby="button-addon2" onChange={handleMammalSearch} value={mammalQuery}></input>
                    </div>
                    <div className="fish-list">
                            <ul className="list-group">
                                {filteredMammals.map((mammal, index) => (
                                    <li key={index} className="list-group-item" onClick={() => handleMammalClick(mammal)}>{mammal.name}</li>
                                ))}
                            </ul>
                        </div>
                </div>
                <div className="col-md-6">
                <div className="mammal-about">
                            {selectedMammals && <AboutMammal mammal={selectedMammals}/>}
                        </div>
                </div>
            </div>
        </div>
    )

}

export default HomeMammals;