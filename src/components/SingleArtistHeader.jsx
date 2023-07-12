import React from "react";
import '../style/SingleArtistHeader.scss'
import Genre from "./Genre";
import LikeButton from "./LikeButton";
import Like from '../assets/heartNoFill.svg'
import Unlike from '../assets/heartFill.svg'


const SingleArtistHeader = (props) => {

    return(
        <>
            <div className="artist-header">
                <img src={props.image} alt="artist" className="artist-header__img" />
                <div className="artist-header__artist-info">
                    <h1 className="artist-header__artist-info__name">{props.artist}</h1>
                    { props.followers ? <h3 className="artist-header__artist-info__followers">{props.followers.toLocaleString('en-US')} followers</h3> : '' }
                    <div className="artist-header__artist-info__genres">
                        { props.genres ? props.genres.map((genre, index) => <Genre key={index} genre={genre} />) : 'Loading' }
                        { props.isLiked ? <LikeButton handleLikeClick={props.handleLike} icon={Unlike} /> : <LikeButton handleLikeClick={props.handleLike} icon={Like} /> }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleArtistHeader;