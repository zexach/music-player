import React from "react";
import '../style/SingleTrack.scss'

const SingleTrack = (props) => {

    return(
        <>
            <div className="single-track">
                <div className="single-track__details">
                    <img src="https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7" className="single-track__details__img" alt="track" />
                    <p className="single-track__details__name">Wake me up</p>
                </div>
                <p className="single-track__details__name">123.456.78</p>
                <p className="single-track__details__name">4:56</p>
            </div>
        </>
    );
}

export default SingleTrack;