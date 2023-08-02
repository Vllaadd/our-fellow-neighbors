import React from "react";
import '../components/Menu.css'

const Menu = () => {
    return (
        <>
            <table className="menu">
                <tr>
                    <td><a href="#">Home</a></td>
                </tr>
                <tr>
                    <td><a href="fish">Fish</a></td>
                </tr>
                <tr>
                    <td><a href="animals">Animals</a></td>
                </tr>
                <tr>
                    <td><a href="birds">Birds</a></td>
                </tr>
                <tr>
                    <td> <a href="contact">Contact</a></td>
                </tr>
            </table>
        </>
    )
}

export default Menu;