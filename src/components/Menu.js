import React from "react";
import '../components/Menu.css'

const Menu = () => {
    return(
        <>
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="fish">Fish</a></li>
                <li><a href="animals">Animals</a></li>
                <li><a href="birds">Birds</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
        </>
    )
}

export default Menu;