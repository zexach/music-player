import React from "react";
import '../style/ArtistAlbums.scss'
import SingleAlbum from "./SingleAlbum";

const ArtistAlbum = (props) => {

    return(
        <div className="artist-albums">
            <h3 className="artist-albums__title">Albums</h3>
            <div className="artist-albums__elements">
                <SingleAlbum />
            </div>
        </div>
    );
}

export default ArtistAlbum;