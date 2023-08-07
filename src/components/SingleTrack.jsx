import React from "react";
import { useState, useEffect } from "react";
import '../style/SingleTrack.scss'
import ExplicitAlert from "./ExplicitAlert";

const SingleTrack = (props) => {

    const [trackDuration, setTrackDuration] = useState('');

    const duration = props.duration;

    const convertToMinutes = () => {
        let minutes = Math.floor(duration / 60000);
        let seconds = Math.floor((duration % 60000) / 1000);

        setTrackDuration(minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
    }

    useEffect(() => {
        convertToMinutes();
    }, [])

    return(
        <>
            <div className="single-track">
                <div className="single-track__details">
                    <p className="single-track__details__name">{props.id+1}.</p>
                    <img src={props.image} className="single-track__details__img" alt="track" />
                    <p className="single-track__details__name">{props.name}</p>
                    { props.explicit ? <ExplicitAlert /> : '' }
                </div>
                <p className="single-track__details__name">{trackDuration}</p>
            </div>
        </>
    );
}

export default SingleTrack;