import React from "react";
import '../pages/Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="column">
                <div className="row">
                    <form>
                        <input type="text" name="search" placeholder="Enter your tree" />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="row">
                    <table className="list">
                        <tr>
                            <td>Tree 1</td>
                        </tr>
                        <tr>
                            <td>Tree 2</td>
                        </tr>
                        <tr>
                            <td>Tree 3</td>
                        </tr>
                        <tr>
                            <td>Tree 4</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="column">
                <div className="google-map"></div>
            </div>
        </div>
    )
}

export default Home;