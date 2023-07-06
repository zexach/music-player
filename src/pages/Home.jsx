import React from "react";
import { useState, useEffect } from "react";
import '../style/Home.scss'
import axios from "axios";
import Trending from "../components/Trending";
import TopArtists from "../components/TopArtists";
import SingleArtist from "./SingleArtist";

const Home = () => {

    const token = localStorage.getItem("token");

    const artists_id = '2CIMQHirSU0MQqyYHq0eOx,1vCWHaC5f2uS3yhpwWbIA6,66CXWjxzNUsdJxJ2JdwvnR,1Xyo4u8uXC1ZmMpatF05PJ,6M2wZ9GZgrQXHCFfjv46we,6VuMaDnrHyPL1p4EHjYLi7,49bzE5vRBRIota4qeHtQM8';
    const [artists, setArtists] = useState([]);

    const getArtists = async() => {
        try{
            const response = await axios.get(`https://api.spotify.com/v1/artists?ids=${artists_id}`,
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setArtists(response.data.artists);
        }catch(e){
            console.log(e);
        }
    }

    const trending_track_id = '4rPkN1FMzQyFNP9cLUGIIB'
    const [trendingTrack, setTrendingTrack] = useState();

    const getTrendingTrack = async() => {
        try{
            const response = await axios.get(`https://api.spotify.com/v1/tracks/${trending_track_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setTrendingTrack(response.data);
        }catch(e){
            console.log(e);
        }
    } 

    useEffect(() => {
        getTrendingTrack();
        getArtists();
    }, []);

    return(
        <div className="home">
            <h2 className="home__sub">Discover</h2>
            {
                trendingTrack ? 
                    <Trending trackName={trendingTrack.name} artist={trendingTrack.artists[0].name} image={trendingTrack.album.images[0].url} /> 
                    :
                    <div>Loading...</div>
            }
            {artists ? <TopArtists artists={artists} /> : <div>Loading...</div>}
        </div>
    )
}

export default Home;