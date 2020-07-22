import React from 'react';

import '../../component-style/projectcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome/icon';

const Projectcard = (props) => {

    return(
        <div className="projectcard">
            <div className="card">
                <div className="project-pic-box">
                    <img src={props.pic} alt="pic1"></img>
                </div>
                <div className="content">
                    <h1 className="pro-title">{props.title}</h1>
                    <div className="pro-desc">
                    <h3 className="guided"><span className="nor">Guided:</span> {props.guided? "YES" : "NO"}</h3>
                        <ul>
                            {props.techused.map(i => {
                                return(<li className="f-used">{i}</li>);
                            })}
                            <div className="pro-btns">
                                <a target="blank" href={props.github}><FontAwesomeIcon className="my-icon" icon={['fab', 'github']} size="2x" /></a>
                                <a className="live-btn" target="blank" href={props.hosted}>See Live</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projectcard;