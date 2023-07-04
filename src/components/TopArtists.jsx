import React from "react";
import '../style/TopArtists.scss'
import Artist from "./Artist";

const TopArtists = (props) => {

    const show = (item) => {
        console.log(item);
    }

    return(
        <>
        <div className="artist-section">
            <div className="artist-section__header">
                <h3 className="artist-section__header__title">Top artists</h3>
                <p className="artist-section__header__see-more">Show All</p>
            </div>
            <div className="artist-section__artists">
                {props.artists.map((artist, index) => <div onClick={show} key={index}><Artist id={artist.id} name={artist.name} image={artist.images[0].url} onArtistClick={show} /></div>)}
            </div>
        </div>
        </>
    );
}

export default TopArtists;