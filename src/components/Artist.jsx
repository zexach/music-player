import React from "react";
import '../style/Artist.scss'

const Artist = (props) => {

    return(
        <>
        <div className="artist">
            <img src={props.image} className="artist__img" alt="artist" />
            <p className="artist__full-name">{props.name}</p>
        </div>
        </>
    );
}

export default Artist;