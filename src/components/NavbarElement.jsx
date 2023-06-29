import React from "react";
import '../style/NavbarElement.scss'
import { Link } from "react-router-dom";


const NavbarElement = (props) => {

    return(
        <Link to={props.path}>
            <div className="nav-element">
                <img className="nav-element__nav-icon" src={props.icon} alt="icon" />
                <p className="nav-element__nav-title">{props.title}</p>
            </div>
        </Link> 
    );
}

export default NavbarElement;