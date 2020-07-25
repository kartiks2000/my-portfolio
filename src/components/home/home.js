import React from 'react';
import '../../component-style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome/icon';


const Home = () => {

    return(
        <div className="home">
            <div className="intro">
                <div className="pic-box"></div>
                <div className="text-content">
                    <h1 className="intro-line">Hi, I am <span className="myname">Kartik Saxena</span></h1>
                    <h1 className="intro-text">I am currently a Frontend Web & a Mobile developer and a Fullstack developer in making....</h1>
                    <div className="social-icon">
                        <a target="blank" href="https://github.com/kartiks2000"><FontAwesomeIcon className="my-icon" icon={['fab', 'github']} size="2x" /></a>
                        <a target="blank" href="https://www.linkedin.com/in/kartik-saxena-aa3378168/"><FontAwesomeIcon className="my-icon" icon={['fab', 'linkedin']} size="2x" /></a>                        
                        <a target="blank" href="https://www.instagram.com/kartiksaxena2000/?hl=en"><FontAwesomeIcon className="my-icon" icon={['fab', 'instagram']} size="2x"/></a> 
                        <a target="blank" href="https://stackoverflow.com/users/13947801/kartik-saxena"><FontAwesomeIcon className="my-icon" icon={['fab', 'stack-overflow']} size="2x"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;