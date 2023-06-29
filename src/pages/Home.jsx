import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

    const clientID = import.meta.env.VITE_CLIENT_ID;
    const secretID = import.meta.env.VITE_SECRET_ID;
    const redirectURI = import.meta.env.VITE_REDIRECT_URI;
    const responseType = import.meta.env.VITE_RESPONSE_TYPE;

    const URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&responseType=${responseType}`;

    const handleClick = async() => {
        window.open(URL, 'popup', 'popup=true');
    }

    return(
        <div className="home">
            <button onClick={handleClick} className="btn">Fetch</button>
        </div>
    )
}

export default Home;