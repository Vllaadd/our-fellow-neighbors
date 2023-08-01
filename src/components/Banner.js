import React from "react";

const Banner = () => {
    return(
        <>
        <div className="logo">
            <img src={require('../assets/Tree.jpg').default} alt="Webpage Logo" />
        </div>
        <div className="banner">
            <div className="app-name">
                <h1>Find Your Tree</h1>
            </div>
        </div>
        </>
    )
}

export default Banner;