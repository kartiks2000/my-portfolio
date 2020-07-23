import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome/icon';

import '../../component-style/footer.css';

const Footer = () => {

    return(
        <div className="footer">
            <h1 className="footer-dev-text">Designed and Developed by <span className="myname1">KARTIK SAXENA.</span></h1>
            <h2 className="footer-dev-text2">Developed using <span className="react-hi1">Reactjs</span>.</h2>
            <h2 className="footer-dev-text3">All rights reserved&copy;2020</h2>
            <div className="social-icon2">
                        <a target="blank" href="https://github.com/kartiks2000"><FontAwesomeIcon className="my-icon2" icon={['fab', 'github']} size="2x" /></a>
                        <a target="blank" href="https://www.linkedin.com/in/kartik-saxena-aa3378168/"><FontAwesomeIcon className="my-icon2" icon={['fab', 'linkedin']} size="2x" /></a>                        
                        <a target="blank" href="https://www.instagram.com/kartiksaxena2000/?hl=en"><FontAwesomeIcon className="my-icon2" icon={['fab', 'instagram']} size="2x"/></a> 
                        <a target="blank" href="https://stackoverflow.com/users/13947801/kartik-saxena"><FontAwesomeIcon className="my-icon2" icon={['fab', 'stack-overflow']} size="2x"/></a>
                    </div>
        </div>
    );
}

export default Footer;