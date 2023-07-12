import React from "react";
import '../style/SingleAlbum.scss'

const SingleAlbum = (props) => {

    return(
        <div className="single-album">
            <img src={props.image} alt="" className="single-album__img" />
            <div className="single-album__details">
                <p className="single-album__details__detail">{props.nrOfTracks} tracks</p>
                <p className="single-album__details__detail">&bull;</p>
                <p className="single-album__details__detail">{props.releaseDate.substring(0,4)}</p>
            </div>
            <h4 className="single-album__title">{props.title}</h4>
        </div>
    );
}

export default SingleAlbum;