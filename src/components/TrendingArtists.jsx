import React from "react";
import '../style/TrendingArtists.scss'
import Artist from "./Artist";
import { Link } from "react-router-dom";

const TopArtists = (props) => {

    return(
        <>
        <div className="artist-section">
            <div className="artist-section__header">
                <h3 className="artist-section__header__title">{props.title}</h3>
            </div>
            <div className="artist-section__artists">
                {props.artists.map((artist, index) => <Link key={artist.id} to={`/artist/${artist.id}`}><Artist  id={artist.id} name={artist.name} image={artist.images[0].url} /></Link>)}
            </div>
        </div>
        </>
    );
}

export default TopArtists;