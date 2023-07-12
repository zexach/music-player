import React from "react";
import '../style/TopTracks.scss'
import SingleTrack from "./SingleTrack";

const TopTracks = (props) => {

    return(
        <div className="top-tracks">
            <h3 className="top-tracks__title">Popular Hits</h3>
            <div className="top-tracks__elements">
                { props.tracks ? 
                    props.tracks.map((track, index) => 
                        <SingleTrack 
                            key={index} 
                            id={index}
                            image={track.album.images[0].url} 
                            name={track.name} 
                            duration={track.duration_ms}
                            explicit={track.explicit} />) :
                            '' 
                }
            </div>
        </div>
    );
}

export default TopTracks;