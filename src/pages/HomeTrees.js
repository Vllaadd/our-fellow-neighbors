import React, { useState, useEffect } from "react";
import "../pages/css/HomeTrees.css";
import AboutTrees from './AboutTrees';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const HomeTrees = ({ trees }) => {
    const [treeQuery, setTreeQuery] = useState("");
    const [filteredTrees, setFilteredTrees] = useState([]);
    const [selectedTree, setSelectedTree] = useState(null);

    useEffect(() => {
        setFilteredTrees(trees);
    }, [trees]);

    const handleTreeSearch = (event) => {
        setTreeQuery(event.target.value);

        const filteredTrees = trees.filter((tree) =>
            tree.type.toLowerCase().includes(event.target.value.toLowerCase())
        );

        setFilteredTrees(filteredTrees);
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
                                        position={{ lat: selectedTree.coordinates.lat, lng: selectedTree.coordinates.lng }}
                                        title={selectedTree.type}
                                    />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Find Your Tree" aria-label="Find Your Tree" aria-describedby="button-addon2" onChange={handleTreeSearch} value={treeQuery}></input>
                        </div>
                        <div className="tree-list">
                            <ul className="list-group">
                                {filteredTrees.map((tree, index) => (
                                    <li key={index} className="list-group-item" onClick={() => handleTreeClick(tree)}>{tree.type}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="tree-about">
                            {selectedTree && <AboutTrees tree={selectedTree}/>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default HomeTrees;