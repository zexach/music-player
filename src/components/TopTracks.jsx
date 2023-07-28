import React from "react";
import { Link } from "react-router-dom";
import '../style/TopTracks.scss'
import SingleTrack from "./SingleTrack";

const TopTracks = (props) => {

    return(
        <div className="top-tracks">
            <h3 className="top-tracks__title">Popular Hits</h3>
            <div className="top-tracks__elements">
                { props.tracks ? 
                    props.tracks.map((track, index) => 
                        <Link key={index} to={`/track/${track.id}`} >
                            <SingleTrack 
                                key={index} 
                                id={index}
                                image={track.album.images[0].url} 
                                name={track.name} 
                                duration={track.duration_ms}
                                explicit={track.explicit} />
                        </Link>) 
                        :
                        '' 
                }
            </div>
        </div>
    );
}

export default TopTracks;