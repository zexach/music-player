import React from "react";
import { useState, useEffect } from "react";
import '../style/Login.scss'

const Login = () => {

    const clientID = import.meta.env.VITE_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_REDIRECT_URI;
    const responseType = import.meta.env.VITE_RESPONSE_TYPE;
    const scopes = [
        'user-follow-modify'
    ];

    const URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=${responseType}`;


    const getDataFromURL = () => {

        const data = window.location.hash.substring(1).split('&').reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            
            return initial;
        }, {})
        
        return data;      
    }

    useEffect(() => {
        const hash = window.location.hash;
        if(hash){
            const spotifyToken = getDataFromURL().access_token;
            window.localStorage.setItem("token", spotifyToken);
            window.location.hash = '';
        }
    }, [])

    return(
        <div className="login">
            <div className="login__content">
                <h1 className="login__content__title">Welcome to the Star Tunes music app</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a className="login__content__login-btn" href={URL}>Login with Spotify</a>
            </div>
        </div>
    );
}

export default Login;