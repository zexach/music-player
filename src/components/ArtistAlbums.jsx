import React from "react";
import '../style/ArtistAlbums.scss'
import SingleAlbum from "./SingleAlbum";

const ArtistAlbum = (props) => {

    return(
        <div className="artist-albums">
            <h3 className="artist-albums__title">Albums</h3>
            <div className="artist-albums__elements">
                {
                    props.albums ? 
                        props.albums.map((album, index) => 
                        <SingleAlbum 
                            key={index}
                            image={album.images[0].url}
                            title={album.name}
                            nrOfTracks={album.total_tracks}
                            releaseDate={album.release_date} /> ) :
                            ''
                }
            </div>
        </div>
    );
}

export default ArtistAlbum;