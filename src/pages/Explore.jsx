import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../style/Explore.scss'
import SearchSection from "../components/SearchSection";


const Explore = () => {

    const token = localStorage.getItem("token");
    const URL = import.meta.env.VITE_API_URL;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const artists_id = '1vCWHaC5f2uS3yhpwWbIA6,66CXWjxzNUsdJxJ2JdwvnR,1Xyo4u8uXC1ZmMpatF05PJ,6M2wZ9GZgrQXHCFfjv46we,6VuMaDnrHyPL1p4EHjYLi7,49bzE5vRBRIota4qeHtQM8';
    const [artists, setArtists] = useState([]);
    const getArtists = async() => {
        try{
            const response = await axios.get(`${URL}/artists?ids=${artists_id}`, config);
            setArtists(response.data.artists);
            console.log(response.data.artists);
        }catch(e){
            console.log(e);
        }
    }

    const [trendingTracks, setTrendingTracks] = useState();
    const getTrendingTracks = async() => {
        try{
            const response = await axios.get(`${URL}/recommendations?limit=9&seed_genres=pop%2Cdancepop&min_popularity=80`, config);
            setTrendingTracks(response.data.tracks);
            console.log(response.data.tracks);
        }catch(e){
            console.log(e);
        }
    }


    const [inputQuery, setInputQuery] = useState('');
    const [checkedParameters, setCheckedParameters] = useState('');
    const handleInputValue = (text) => {
        const input = text.replace(' ', '+');
        setInputQuery(input.toLowerCase());
    }

    const handleCheckbox = (artist, track, album) => {
        const selectedValues = [
            artist && 'artist',
            track && 'track',
            album && 'album',
        ].filter(Boolean);

        setCheckedParameters(selectedValues.join('%2C'));
    }

    const getSearch = async() => {
        if(inputQuery && checkedParameters){
            try{
                const response = await axios.get(`${URL}/search?q=${inputQuery}+&type=${checkedParameters}`, config);
                console.log(response.data);
            }catch(e){
                console.log(e);
            }
        }
    }

    useEffect(() => {
        getArtists();
        getTrendingTracks();
    }, []);

    return(
        <div className="explore">
            <SearchSection onSearch={getSearch} onValueChange={handleCheckbox} onInput={handleInputValue} />
        </div>
    )
}

export default Explore;