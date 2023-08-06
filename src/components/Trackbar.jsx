import React from "react";
import '../style/Trackbar.scss'
import { useState, useEffect } from "react";

const Trackbar = (props) => {

    const [currentPosition, setCurrentPosition] = useState('');
    const [trackDuration, setTrackDuration] = useState('');

    const duration = props.duration;
    
    const convertToMinutes = (duration_ms) => {
        let seconds = duration_ms / 1000;
        let minutes = seconds / 60;
        let decimal = minutes - Math.floor(minutes);

        if(decimal >= 0.60){
            decimal = decimal - 0.60;
            minutes = Math.round(minutes);
        }
        minutes = Math.floor(minutes);
        decimal = Math.round(decimal*100).toString().padStart(2, '0');
        return (minutes + ':' + decimal);
    }

    const [trackbarValue, setTrackbarValue] = useState(0);
    const handleTrackbar = (event) => {
        setTrackbarValue(event.target.value);
    }

    useEffect(() => {
        setTrackDuration(convertToMinutes(duration));
    }, [duration]);

    useEffect(() => {
        setCurrentPosition(convertToMinutes(trackbarValue));
    }, [trackbarValue]);

    useEffect(() => {
        if(!props.isPaused){
            const interval = setInterval(() => {
                setTrackbarValue((prevValue) => ((prevValue + 100)))
              }, 1000);
          
              return () => {
                clearInterval(interval);
              };
        }
      }, [props.isPaused]);

    return(
        <>
            <div className="track-details">
                <div className="track-details__data">
                    <p className="track-details__data__currently">{currentPosition}</p>
                    <p className="track-details__data__track-duration">{trackDuration}</p>
                </div>
                <input onChange={handleTrackbar} min="0" max={props.duration} value={trackbarValue} type="range" className="track-details__trackbar" />
            </div>
        </>
    );
}

export default Trackbar;