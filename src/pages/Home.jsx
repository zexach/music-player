import React from "react";
import { useState, useEffect } from "react";
import '../style/Home.scss'
import axios from "axios";
import Trending from "../components/Trending";
import TrendingArtists from "../components/TrendingArtists";
import SearchSection from "../components/SearchSection";
import TrendingAlbums from "../components/TrendingAlbums";
import TrendingTracks from "../components/TrendingTracks";

const Home = () => {

    const token = localStorage.getItem("token");
    const URL = import.meta.env.VITE_API_URL;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const artists_id = '1vCWHaC5f2uS3yhpwWbIA6,66CXWjxzNUsdJxJ2JdwvnR,1Xyo4u8uXC1ZmMpatF05PJ,6M2wZ9GZgrQXHCFfjv46we,6VuMaDnrHyPL1p4EHjYLi7,49bzE5vRBRIota4qeHtQM8';
    const artists_id_2 = '7BjXGqrW02WB9cnLKKzwrK,4yvRXgtIPiDMzH3wb1JPh7,39QpkKA8DlIerdivENnMdU,1vhshb6p5AJSSgAj2LLnpA,66CXWjxzNUsdJxJ2JdwvnR,6eiVM12aC3SP5n0fMg9fqP';
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

    const [trendingAlbums, setTrendingAlbums] = useState();
    const getTrendingAlbums = async() => {
        try{
            const response = await axios.get(`${URL}/browse/new-releases?limit=10`, config);
            setTrendingAlbums(response.data.albums.items);
        }catch(e){
            console.log(e);
        }
    }
    
    const [trendingTracks, setTrendingTracks] = useState();
    const getTrendingTracks = async() => {
        try{
            const response = await axios.get(`${URL}/recommendations?limit=9&seed_genres=pop%2Cdancepop&min_popularity=80`, config);
            console.log(response.data.tracks);
            setTrendingTracks(response.data.tracks);
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
        getTrendingAlbums();
        getTrendingTracks();
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
            {artists ? <TrendingArtists artists={artists} /> : <div>Loading...</div>}
            {trendingTracks ? <TrendingTracks tracks={trendingTracks} /> : ''}
            {trendingAlbums ?  <TrendingAlbums albums={trendingAlbums} /> : ''}
        </div>
    )
}

export default Home;