import React from "react";
import '../style/NavbarElement.scss'
import { Link } from "react-router-dom";


const NavbarElement = (props) => {

    return(
        <div className="nav-element">
            <img className="nav-element__nav-icon" src={props.icon} alt="icon" />
            <p className="nav-element__nav-title"> <Link to={`/${props.title.toLowerCase()}`}>{props.title}</Link> </p>
        </div>
    );
}

export default NavbarElement;