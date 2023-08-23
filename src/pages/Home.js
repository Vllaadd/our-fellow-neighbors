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
                        <p>I created this website in order to practice
                            my coding skills, but also out of love and
                            respect for nature which is richer and more
                            diverse in this concrete jungle than most
                            people think. Please go through pages and get
                            familiar with all those beautiful non-human
                            fellow New Yorkers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;