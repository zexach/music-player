import React from "react";
import '../style/Artist.scss'

const Artist = (props) => {

    const handleIDPass = () => {
        props.onArtistClick(props.id)
    }


    return(
        <>
        <div onClick={handleIDPass} className="artist">
            <img src={props.image} className="artist__img" alt="artist" />
            <p className="artist__full-name">{props.name}</p>
        </div>
        </>
    );
}

export default Artist;