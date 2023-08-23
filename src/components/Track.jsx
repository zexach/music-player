import React from "react";
import '../style/TrackComponent.scss'

const Track = (props) => {

    return(
        <>
        <div className="top-track">
            <div className="top-track__details">
                <img src="https://i.scdn.co/image/ab67616d00001e020c13d3d5a503c84fcc60ae94" className="top-track__details__img" alt="artist" />
                <h3 className="top-track__details__title">Naziv</h3>
            </div>
            
        </div>
        </>
    )
}

export default Track;