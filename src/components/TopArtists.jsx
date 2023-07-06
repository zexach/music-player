import React from "react";
import '../style/TopArtists.scss'
import Artist from "./Artist";
import { Link } from "react-router-dom";

const TopArtists = (props) => {

    return(
        <>
        <div className="artist-section">
            <div className="artist-section__header">
                <h3 className="artist-section__header__title">Top artists</h3>
                <p className="artist-section__header__see-more">Show All</p>
            </div>
            <div className="artist-section__artists">
                {props.artists.map((artist, index) => <Link key={index} to={`/artist/${artist.id}`}><Artist  id={artist.id} name={artist.name} image={artist.images[0].url} /></Link>)}
            </div>
        </div>
        </>
    );
}

export default TopArtists;