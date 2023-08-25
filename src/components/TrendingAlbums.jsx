import React from "react";
import SingleAlbum from "./SingleAlbum";
import '../style/TrendingAlbums.scss'

const TopAlbums = (props) => {

    return(
    <>
        <div className="albums-section">
            <div className="albums-section__header">
                <h3 className="albums-section__header__title">{props.title}</h3>
            </div>
            <div className="albums-section__albums">
                {
                    props.albums ? 
                        props.albums.map((album, index) => 
                        <SingleAlbum 
                            key={index}
                            image={album.images[0].url}
                            title={album.name}
                            nrOfTracks={album.total_tracks}
                            releaseDate={album.release_date} /> ) 
                        :
                        ''
                }
            </div>
        </div>
    </>
    );
}

export default TopAlbums;