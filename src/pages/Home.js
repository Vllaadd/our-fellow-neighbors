import React, { useState } from "react";
import '../pages/Home.css'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Home = ({ treesData }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterItems, setFilteredItems] = useState({treesData});

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);

        const filteredList = treesData.filter((tree) =>
        tree.type.toLowerCase().includes(event.target.value.toLowerCase())
      );
  
      setFilteredItems(filteredList);
    }

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
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">Japanese Zelekova</li>
                        <li class="list-group-item">Norway Maple</li>
                        <li class="list-group-item">London Plane Tree</li>
                        <li class="list-group-item">Oak</li>
                    </ul>
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
                            {treesData.map((tree, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: tree.lat, lng: tree.lng }}
                                    title={tree.type}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Home;