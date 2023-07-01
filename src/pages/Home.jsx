import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

    const clientID = import.meta.env.VITE_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_REDIRECT_URI;
    const responseType = import.meta.env.VITE_RESPONSE_TYPE;

    const [token, setToken] = useState(null);

    const URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}`;


    const getDataFromURL = () => {

        const data = window.location.hash.substring(1).split('&').reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            
            return initial;
        }, {})


        return data;      
    }

    useEffect(() => {

        const spotifyToken = getDataFromURL().access_token;
        let hash = window.location.hash;
        if(hash){
            window.localStorage.setItem("token", spotifyToken);
            setToken(spotifyToken);
        }
    }, [])

    return(
        <div className="home">
            <a href={URL}>Login to spotify</a>
        </div>
    )
}

export default Home;