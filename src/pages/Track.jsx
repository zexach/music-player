import React from "react";
import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/Track.scss'
import Player from "../components/Player"
import useOverFlowHidden from "../hooks/useOverflowDisable";

export const MyContext = createContext();

const Track = () => {
    
    useOverFlowHidden();

    const token = localStorage.getItem("token");
    const {id} = useParams();
    const URL = import.meta.env.VITE_API_URL;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const [track, setTrack] = useState();
    const getTrack = async() => {
        try{
            const response = await axios.get(`${URL}/tracks/${id}`, config);
            setTrack(response.data);
        }catch(e){
            console.log(e);
        }
    }

    const transferPlayback = async(id) => {
        try{
            const response = await axios.put(`${URL}/me/player`, 
            {
                'device_ids': [`${id}`]
            },
            config
            );
            console.log('Ready with Device ID', id);
        }catch(e){
            console.log(e);
        }
    }
    
    const setTrackSpotify = async() => {
        if(track){
            try{
                const response = await axios.put(`${URL}/me/player/play`,
                    {
                        "context_uri": `${track.album.uri}`,
                        "offset": {
                            "position": track.track_number-1
                        },
                        "position_ms": 0
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type':'application/json'
                        }
                    }
                )
            }catch(e){
                console.log(e);
            }
        }
    }

    const [currentTrack, setCurrentTrack] = useState();
    const handleCurrentTrack = (track) => {
        setCurrentTrack(track);
    }

    const seekToPosition = async(ms) => {
        try{
            const response = await axios.put(`${URL}/me/player/seek?position_ms=${ms}`, {},
                config
            );
        }catch(e){
            console.log(e);
        }
    }
  
    useEffect(() => {
        getTrack();
    }, []);


    return(
        <>
        {track ? 
        <div className="track">
            {currentTrack ? <img src={currentTrack.album.images[0].url} alt="artist" className="track__artist-img" /> : ''}
            <div className="track__player">
                <MyContext.Provider value={{ seekToPosition }}>
                    <Player onTrack={handleCurrentTrack} onLoad={transferPlayback} setTrack={setTrackSpotify} token={token} />
                </MyContext.Provider>
            </div>
        </div> : ''}
        </>
    );
}

export default Track;