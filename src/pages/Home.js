import React, { useState } from "react";
import '../pages/Home.css'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Home = ({ treesData }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterItems, setFilteredItems] = useState([]);
    const [selectedTree, setSelectedTree] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);

        const filteredList = treesData.filter((tree) =>
            tree.type.toLowerCase().includes(event.target.value.toLowerCase())
        );

        setFilteredItems(filteredList);
    }

    const handleTreeClick = (tree) => {
        setSelectedTree(selectedTree => (selectedTree === tree ? null : tree));
    };

    const mapContainerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: 40.682839,
        lng: -73.953972
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Find Your Tree" aria-label="Find Your Tree" aria-describedby="button-addon2" onChange={handleSearchChange} value={searchQuery}></input>
                        </div>
                        <div className="tree-list">
                            <ul className="list-group">
                                {filterItems.map((tree, index) => (
                                    <li key={index} className="list-group-item" onClick={() => handleTreeClick(tree)}>{tree.type}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="google-map">
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                        >
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={11}
                            >
                                {selectedTree && (
                                    <Marker
                                        position={{ lat: selectedTree.lat, lng: selectedTree.lng }}
                                        title={selectedTree.type}
                                    />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;