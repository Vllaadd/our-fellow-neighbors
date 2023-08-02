import React from "react";
import '../components/Menu.css'

const Menu = () => {
    return(
        <>
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="fish">NYC Waters Fish</a></li>
                <li><a href="animals">NYC Animals</a></li>
                <li><a href="birds">NYC Birds</a></li>
                <li><a href="contact">Contact</a>Contact</li>
            </ul>
        </div>
        </>
    )
}

export default Menu;