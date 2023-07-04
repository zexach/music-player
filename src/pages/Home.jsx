import React from "react";
import { useState, useEffect } from "react";
import '../style/Home.scss'
import axios from "axios";
import TopArtists from "../components/TopArtists";

const Home = () => {

    const token = localStorage.getItem("token");
    const id = '2CIMQHirSU0MQqyYHq0eOx,1vCWHaC5f2uS3yhpwWbIA6,4oe1qp9xGSFxMYH4X9AXtl,1Xyo4u8uXC1ZmMpatF05PJ,6M2wZ9GZgrQXHCFfjv46we,6VuMaDnrHyPL1p4EHjYLi7,49bzE5vRBRIota4qeHtQM8';

    const [artists, setArtists] = useState([]);

    const getArtists = async() => {
        const response = await axios.get(`https://api.spotify.com/v1/artists?ids=${id}`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log(response.data.artists);
        setArtists(response.data.artists);
    }

    useEffect(() => {
        getArtists();
    }, []);

    return(
        <div className="home">
            <h2 className="home__sub">Discover</h2>
            <TopArtists artists={artists} />
        </div>
    )
}

export default Home;