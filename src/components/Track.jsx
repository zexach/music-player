import React from "react";
import { useState } from "react";
import '../style/TrackComponent.scss'
import play from '../assets/play-fill.svg'


const Track = (props) => {
    
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHoverIn = () => {
        setIsHovered(true);
    }
    
    const handleHoverOut = () => {
        setIsHovered(false);
    }

    return(
        <>
        <div className="top-track" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <div className="top-track__details">
                <img src={props.img} className="top-track__details__img" alt="artist" />
                <h3 className="top-track__details__title">{props.name}</h3>
            </div>
            <img src={play} alt="play" className={`top-track__icon ${isHovered ? 'hovered' : ''}`} />
        </div>
        </>
    )
}

export default Track;