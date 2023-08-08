import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/Track.scss'
import Player from "../components/Player"


const Track = () => {

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
    
    const [isLoaded, setIsLoaded] = useState(false);
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
                setIsLoaded(true);
            }catch(e){
                console.log(e);
            }
        }
    }

    const getAvailableDevices = async() => {
        try{
            const response = await axios.get(`https://api.spotify.com/v1/me/player/devices`, config);
            console.log(response.data);
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
            <Player onLoad={transferPlayback} track={track} setTrack={setTrackSpotify} token={token} />
        </div> : ''}
        </>
    );
}

export default Track;