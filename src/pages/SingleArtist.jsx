import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/SingleArtist.scss'
import SingleArtistHeader from "../components/SingleArtistHeader";
import TopTracks from "../components/TopTracks";
import ArtistAlbum from "../components/ArtistAlbums";

const SingleArtist = () => {

    const token = localStorage.getItem("token");
    const {id} = useParams();
    const URL = import.meta.env.VITE_API_URL;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const [artist, setArtist] = useState({});
    const getArtist = async() => {
        try{
            const response = await axios.get(`${URL}/artists/${id}`, config);
            
            setArtist(response.data);
        }catch(e){
            console.log(e);
        }    
    }

    const [topTracks, setTopTracks] = useState({})
    const getArtistTopTracks = async() => {
        try{
            const response = await axios.get(`${URL}/artists/${id}/top-tracks?market=US`, config);
            setTopTracks(response.data)
        }catch(e){
            console.log(e);
        }
    }

    const [albums, setAlbums] = useState();
    const getArtistAlbums = async() => {
        try{
            const response = await axios.get(`${URL}/artists/${id}/albums`, config);
            setAlbums(response.data.items);
        }catch(e){
            console.log(e);
        }
    }

    const [isLiked, setIsLiked] = useState(false);
    const getIsLiked = async() => {
        try{
            const response = await axios.get(`${URL}/me/following/contains?type=artist&ids=${id}`, config)
            setIsLiked(response.data[0]);
        }catch(e){
            console.log(e);
        }
    }

    const handleFollowArtist = async() => {
        if(!isLiked){
            try{
                const response = await axios.put(`${URL}/me/following?type=artist&ids=${id}`,
                    {
                        "ids": [
                            "string"
                        ]
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type':'application/json'
                        }
                    }
                )
                setIsLiked(!isLiked);
            }catch(e){
                console.log(e);
            }
        }
        else{
            try{
                const response = await axios.delete(`${URL}/me/following?type=artist&ids=${id}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type':'application/json'
                        },
                        data: {
                            ids: ["string"]
                        }
                    }
                )
                setIsLiked(!isLiked);
            }catch(e){
                console.log(e);
            }
        }        
    }

    useEffect(() => {
        getArtist();
        getArtistTopTracks();
        getArtistAlbums();
        getIsLiked();
    }, [])

    return(
        <div className="single-artist">
            { 
                artist && artist.followers ? 
                    <SingleArtistHeader 
                        artist={artist.name} 
                        followers={artist.followers.total} 
                        image={artist.images[0].url} 
                        genres={artist.genres}
                        isLiked={isLiked}
                        handleLike={handleFollowArtist} /> : 
                    <div>Loading...</div> 
            }

            {
                topTracks.tracks ? 
                    <TopTracks tracks={topTracks.tracks} /> : ''
            }
            {
                albums ? <ArtistAlbum albums={albums} /> : ''
            }
        </div>
    );
}

export default SingleArtist;