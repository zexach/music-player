import React from "react";
import '../style/LikeButton.scss'

const LikeButton = (props) => {

    return(
        <div onClick={props.handleLikeClick} className="like-btn">
            <img src={props.icon} alt="heart" />
        </div>
    );
}

export default LikeButton;