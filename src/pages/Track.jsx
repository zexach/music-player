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
            console.log(response.data);
            setTrack(response.data);
        }catch(e){
            console.log(e);
        }
    }


    const [availableDevices, setAvailableDevices] = useState();
    const getAvailableDevices = async() => {
        try{
            const response = await axios.get(`${URL}/me/player/devices`, config);
            console.log(response.data.devices);
            setAvailableDevices(response.data.devices);
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
                )
                console.log(response);
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
                );
                console.log(response);
            }catch(e){
                console.log(e);
            }
        }
    }

    useEffect(() => {
        getAvailableDevices();
        getTrack();
        setTrackSpotify();
    }, [])


    return(
        <>
        {track ? 
        <div className="track">
            <Player onLoad={transferPlayback} token={token} />
        </div> : ''}
        </>
    );
}

export default Track;