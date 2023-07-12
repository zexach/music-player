import React from "react";
import '../style/SingleAlbum.scss'

const SingleAlbum = (props) => {

    return(
        <div className="single-album">
            <img src="https://i.scdn.co/image/ab67616d0000b273660ee24281a547103f466ff5" alt="" className="single-album__img" />
            <h4 className="single-album__title">Wake me up</h4>
            <div className="single-album__details">
                <p className="single-album__details__detail">12 tracks</p>
                <p className="single-album__details__detail">2022/06/06</p>
            </div>
        </div>
    );
}

export default SingleAlbum;