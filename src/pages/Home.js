import React from "react";
import '../pages/css/Home.css';
import welcomeImage from '../assets/birds-on-wire.png';

const Home = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                <img className="welcome-img" src={welcomeImage} alt="A bird in Manhattan" />
                </div>
                <div className="col-md-8">
                <div className="welcome-title">
                        <h3>Hello neighbor! </h3>
                    </div>
                    <div className="welcome-paragraph">
                        <p>New York takes pride in being one of the most culturally diverse cities 
                            in the world. Not everybody knows that its nature is equally diverse and
                             beautiful. Believing that we, as humans, cannot thrive unless we respect 
                             the balance with all living species on this planet, I created this website 
                             to raise awareness of our beautiful non-human neighbors in our 
                             great city of New York. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;