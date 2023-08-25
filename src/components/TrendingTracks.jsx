import React from "react";
import '../style/TrendingTracks.scss'
import Track from "./TrackComponent";
import { Link } from "react-router-dom";

const TrendingTracks = (props) => {

    return(
        <>
        <div className="tracks-section">
            <div className="tracks-section__header">
                <h3 className="tracks-section__header__title">{props.title}</h3>
            </div>
            <div className="tracks-section__tracks">
                {props.tracks ? props.tracks.map((track) => <Link key={track.id} to={`/track/${track.id}`}><Track key={track.uri} img={track.album.images[0].url} name={track.name} /></Link> ) : ''}
            </div>
        </div>
        </>
    );
}

export default TrendingTracks;