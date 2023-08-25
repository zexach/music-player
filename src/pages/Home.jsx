import React from "react";
import { useState, useEffect } from "react";
import '../style/Home.scss'
import axios from "axios";
import Trending from "../components/Trending";
import TrendingArtists from "../components/TrendingArtists";
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

    const [artists, setArtists] = useState([]);
    const getUserTopArtist = async() => {
        try{
            const response = await axios.get(`${URL}/me/top/artists?time_range=medium_term&limit=6`, config);
            setArtists(response.data.items);
        }catch(e){
            console.log(e);
        }
    }

    const [trendingTracks, setTrendingTracks] = useState();
    const getUserTopTracks = async() => {
        try{
            const response = await axios.get(`${URL}/me/top/tracks?time_range=medium_term&limit=9`, config);
            setTrendingTracks(response.data.items);
        }catch(e){
            console.log(e);
        };
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

    useEffect(() => {
        getUserTopTracks();
        getTrendingAlbums();
        getTrendingTrack();
        getUserTopArtist();
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
            </div>
            {artists ? <TrendingArtists title='Top Artist for You' artists={artists} /> : <div>Loading...</div>}
            {trendingTracks ? <TrendingTracks title='Listen again' tracks={trendingTracks} /> : ''}
            {trendingAlbums ?  <TrendingAlbums title='Trending albums' albums={trendingAlbums} /> : ''}
        </div>
    )
}

export default Home;