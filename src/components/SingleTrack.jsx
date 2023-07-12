import React from "react";
import { useState, useEffect } from "react";
import '../style/SingleTrack.scss'

const SingleTrack = (props) => {

    const [trackDuration, setTrackDuration] = useState('');

    const duration = props.duration;
    let seconds = duration / 1000;
    let minutes = seconds / 60;
    let decimal = minutes - Math.floor(minutes);

    
    const convertToMinutes = () => {
        if(decimal >= 0.60){
            decimal = decimal - 0.60;
            minutes = Math.round(minutes);
        }
        minutes = Math.floor(minutes);
        decimal = Math.round(decimal*100).toString().padStart(2, '0');
        setTrackDuration(minutes + ':' + decimal);
    }

    useEffect(() => {
        convertToMinutes();
    }, [])

    return(
        <>
            <div className="single-track">
                <div className="single-track__details">
                    <img src={props.image} className="single-track__details__img" alt="track" />
                    <p className="single-track__details__name">{props.name}</p>
                </div>
                <p className="single-track__details__name">{trackDuration}</p>
            </div>
        </>
    );
}

export default SingleTrack;