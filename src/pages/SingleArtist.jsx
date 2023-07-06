import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/SingleArtist.scss'
import SingleArtistHeader from "../components/SingleArtistHeader";

const SingleArtist = () => {

    const token = localStorage.getItem("token");
    const {id} = useParams();
    const URL = import.meta.env.VITE_API_URL;

    const [artist, setArtist] = useState({});

    const getArtist = async() => {
        try{
            const response = await axios.get(`${URL}/artists/${id}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(response.data);
            setArtist(response.data);
        }catch(e){
            console.log(e);
        }    
    }

    const [topTracks, setTopTracks] = useState({})

    const getArtistTopTracks = async() => {
        try{
            const response = await axios.get(`${URL}/artists/${id}/top-tracks?market=US`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(response.data);
            setTopTracks(response.data)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getArtist();
        getArtistTopTracks();
    }, [])

    return(
        <div className="single-artist">
            { artist && artist.followers ? 
            <SingleArtistHeader 
            artist={artist.name} 
            followers={artist.followers.total} 
            image={artist.images[0].url} 
            genres={artist.genres} /> : 
            <div>Loading</div> }
        </div>
    );
}

export default SingleArtist;