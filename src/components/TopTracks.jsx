import React from "react";
import '../style/TopTracks.scss'
import SingleTrack from "./SingleTrack";

const TopTracks = (props) => {

    return(
        <div className="top-tracks">
            <h3 className="top-tracks-title">Popular Hits</h3>
            <div className="top-tracks__elements">
                <SingleTrack />
            </div>
        </div>
    );
}

export default TopTracks;