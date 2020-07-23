import React from 'react';
import '../../component-style/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <div className="header">
            <nav className="nav1">
                <NavLink className="li" activeClassName="act" to="/home">Home</NavLink>
                <NavLink className="li" activeClassName="act" to="/aboutme">About Me</NavLink>
                <NavLink className="li" activeClassName="act" to="/projects">Projects</NavLink>
                <NavLink className="li" activeClassName="act" to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Header;