import React from "react";
import '../style/Trending.scss'
import Button from "./Button";

const Trending = (props) => {

    return(
        <>
        <div className="trending-section">
            <div className="trending-section__left-side">
                <div className="trending-section__left-side__content">
                    <h3 className="trending-section__left-side__header">Trending New Hit</h3>
                    <h1 className="trending-section__left-side__song__title">{props.trackName}</h1>
                    <h2 className="trending-section__left-side__song__artist">{props.artist}</h2>
                </div>
                <Button buttonText='Play Now' />
            </div>
            <img src={props.image} className="trending-section__right-side" alt="singer" />
        </div>
        </>
    );
}

export default Trending;