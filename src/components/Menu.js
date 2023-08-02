import React from "react";
import '../components/Menu.css'

const Menu = () => {
    return (
        <>
            <table className="menu">
                <tr>
                    <td><a href="about">About</a></td>
                </tr>
                <tr>
                    <td><a href="trees">Trees</a></td>
                </tr>
                <tr>
                    <td><a href="fish">Birds</a></td>
                </tr>
                <tr>
                    <td><a href="animals">Animals</a></td>
                </tr>
                <tr>
                    <td><a href="birds">Fish</a></td>
                </tr>
                <tr>
                    <td> <a href="contact">Contact</a></td>
                </tr>
            </table>
        </>
    )
}

export default Menu;