import React from "react";
import '../pages/Home.css'

const Home = () => {
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
                <div className="google-map"></div>
            </div>
        </div>
    )
}


export default Home;