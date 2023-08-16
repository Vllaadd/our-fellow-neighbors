import React from "react";
import { Link } from "react-router-dom";
import '../components/Menu.css'

const Menu = () => {
    return (
        <>
            <nav>
                <table className="menu">
                    <tr>
                        <td><Link to="/">Home</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/trees">Trees</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/fish">Fish</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="animals">Animals</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="birds">Brids</Link></td>
                    </tr>
                    <tr>
                        <td> <Link to="contact">Contact</Link></td>
                    </tr>
                </table>
            </nav>
        </>
    )
}

export default Menu;