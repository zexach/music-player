import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArtist = () => {

    const token = localStorage.getItem("token");
    const {id} = useParams();

    const getArtist = async() => {
        
        const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log(response.data);
    }

    useEffect(() => {
        getArtist();
    }, [])

    return(
        <>
            <div>
            </div>
        </>
    );
}

export default SingleArtist;