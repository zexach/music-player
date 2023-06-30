import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

    const clientID = import.meta.env.VITE_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_REDIRECT_URI;
    const responseType = import.meta.env.VITE_RESPONSE_TYPE;

    const [token, setToken] = useState({});

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

        console.log(getDataFromURL());

        window.localStorage.setItem('token', getDataFromURL().access_token);
        window.localStorage.setItem('type', getDataFromURL().token_type);
        window.localStorage.setItem('expiresIn', getDataFromURL().expires_in);


    }, [])

    return(
        <div className="home">
            <a href={URL}>Login to spotify</a>
        </div>
    )
}

export default Home;