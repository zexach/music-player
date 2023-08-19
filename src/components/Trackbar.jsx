import React from "react";
import '../style/Trackbar.scss'
import { useState, useEffect, useContext } from "react";
import { MyContext } from '../pages/Track'

const Trackbar = (props) => {

    const convertToMinutes = (ms) => {
        let minutes = Math.floor(ms / 60000);
        let seconds = Math.floor((ms % 60000) / 1000);

        return (minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
    }

    const { seekToPosition } = useContext(MyContext);

    const [trackbarValue, setTrackbarValue] = useState(0);
    const handleTrackbar = (event) => {
        setTrackbarValue(parseInt(event.target.value));
        seekToPosition(parseInt(event.target.value));
    }
    
    const duration = props.duration;
    const [trackDuration, setTrackDuration] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    useEffect(() => {
        setTrackDuration(convertToMinutes(duration));
        setCurrentPosition(convertToMinutes(trackbarValue));
    }, [duration, trackbarValue]);

    useEffect(() => {

        if(!props.isPaused){

            if(trackbarValue < duration){
                const interval = setInterval(() => {
                    setTrackbarValue((prevValue) => {
                        const newValue = prevValue + 1000;
                        return newValue > duration ? duration : newValue;
                    });
                }, 1000);
                return () => {
                    clearInterval(interval);
                };
            }
        }
    }, [props.isPaused, trackbarValue]);

    useEffect(() => {
        setTrackbarValue(0);
    }, [props.track.id])

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