import React from "react";
import '../style/Trackbar.scss'
import { useState, useEffect } from "react";

const Trackbar = (props) => {

    const [currentPosition, setCurrentPosition] = useState('');
    const [trackDuration, setTrackDuration] = useState('');

    const duration = props.duration;
    
    const convertToMinutes = (ms) => {
        let minutes = Math.floor(ms / 60000);
        let seconds = Math.floor((ms % 60000) / 1000);

        return (minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
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
                setTrackbarValue((prevValue) => ((prevValue + 1000)));
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