import React from "react";
import { useState } from "react";
import music from '../assets/music.svg'
import '../style/NavbarElement.scss'

const NavbarElement = (props) => {

    return(
        <div className="nav-element">
            <img className="nav-element__nav-icon" src={props.icon} alt="icon" />
            <p className="nav-element__nav-title">{props.title}</p>
        </div>
    );
}

export default NavbarElement;