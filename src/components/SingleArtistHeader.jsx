import React from "react";
import '../style/SingleArtistHeader.scss'
import Genre from "./Genre";

const SingleArtistHeader = (props) => {

    return(
        <>
            <div className="artist-header">
                <img src={props.image} alt="artist" className="artist-header__img" />
                <div className="artist-header__artist-info">
                    <h1 className="artist-header__artist-info__name">{props.artist}</h1>
                    <h3 className="artist-header__artist-info__followers">{props.followers.toLocaleString('en-US')} followers</h3>
                    <div className="artist-header__artist-info__genres">
                        {props.genres ? props.genres.map((genre, index) => <Genre key={index} genre={genre} />) : 'Loading' }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleArtistHeader;