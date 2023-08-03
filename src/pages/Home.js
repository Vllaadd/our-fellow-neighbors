import React from "react";
import '../pages/Home.css'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Home = ({ treesData }) => {
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
            <div className="column">
                <div className="row">
                    <form>
                        <input type="text" name="search" placeholder="Enter your tree" />
                        <button type="button" class="btn btn-primary">Search</button>
                    </form>
                </div>
                <div className="row">
                    <table class="table-primary">
                        <tr class="table-primary">
                            <td class="table-primary">Japanese Zelkova</td>
                        </tr>
                        <tr class="table-primary">
                            <td class="table-primary">London Plane Tree</td>
                        </tr>
                        <tr class="table-primary">
                            <td class="table-primary">Norway Maple</td>
                        </tr>
                        <tr class="table-primary">
                            <td class="table-primary">Tree 4</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="column">
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
    )
}


export default Home;