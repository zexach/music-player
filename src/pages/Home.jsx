import React from "react";
import { useState, useEffect } from "react";
import '../style/Home.scss'
import axios from "axios";
import Trending from "../components/Trending";
import TopArtists from "../components/TopArtists";
import SearchSection from "../components/SearchSection";

const Home = () => {

    const token = localStorage.getItem("token");
    const URL = import.meta.env.VITE_API_URL;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const artists_id = '2CIMQHirSU0MQqyYHq0eOx,1vCWHaC5f2uS3yhpwWbIA6,66CXWjxzNUsdJxJ2JdwvnR,1Xyo4u8uXC1ZmMpatF05PJ,6M2wZ9GZgrQXHCFfjv46we,6VuMaDnrHyPL1p4EHjYLi7,49bzE5vRBRIota4qeHtQM8';
    const artists_id_2 = '7BjXGqrW02WB9cnLKKzwrK,4yvRXgtIPiDMzH3wb1JPh7,39QpkKA8DlIerdivENnMdU,1vhshb6p5AJSSgAj2LLnpA,5SI9g7thDG4AvAzjefLDnY,66CXWjxzNUsdJxJ2JdwvnR,6eiVM12aC3SP5n0fMg9fqP';
    const [artists, setArtists] = useState([]);

    const getArtists = async() => {
        try{
            const response = await axios.get(`${URL}/artists?ids=${artists_id}`, config);
            setArtists(response.data.artists);
        }catch(e){
            console.log(e);
        }
    }

    const trending_track_id = '4rPkN1FMzQyFNP9cLUGIIB'
    const [trendingTrack, setTrendingTrack] = useState();

    const getTrendingTrack = async() => {
        try{
            const response = await axios.get(`${URL}/tracks/${trending_track_id}`, config);
            setTrendingTrack(response.data);
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
        getTrendingTrack();
        getArtists();
    }, []);

    return(
        <div className="home">
            <h2 className="home__sub">Discover</h2>
            <div className="home__sub__discover">
                {
                    trendingTrack ? 
                        <Trending 
                            trackName={trendingTrack.name}
                            artist={trendingTrack.artists[0].name}
                            image={trendingTrack.album.images[0].url}
                            uri={trending_track_id} /> 
                        :
                        <div>Loading...</div>
                }
                <SearchSection onSearch={getSearch} onValueChange={handleCheckbox} onInput={handleInputValue} />
            </div>
            {artists ? <TopArtists artists={artists} /> : <div>Loading...</div>}
        </div>
    )
}

export default Home;