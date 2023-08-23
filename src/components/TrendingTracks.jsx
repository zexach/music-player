import React from "react";
import '../style/TrendingTracks.scss'
import Track from "./Track";

const TrendingTracks = (props) => {

    return(
        <>
        <div className="tracks-section">
            <div className="tracks-section__header">
                <h3 className="tracks-section__header__title">Trending Tracks</h3>
            </div>
            <div className="tracks-section__tracks">
                <Track />
            </div>
        </div>
        </>
    );
}

export default TrendingTracks;