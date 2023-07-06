import React from "react";
import '../style/Genre.scss'

const Genre = (props) => {

    return(
        <>
        <div className="genre">
            <p className="genre__name">{props.genre}</p>
        </div>
        </>
    );
}

export default Genre;