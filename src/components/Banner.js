import React from "react";
import '../components/Banner.css'


const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="logo">
                    <img src={require("../assets/trees/tree-logo.gif")} alt="Webpage Logo" />
                </div>
                <div className="app-name">
                    <h1>Find Your Tree</h1>
                </div>
            </div>
        </>
    )
}

export default Banner;