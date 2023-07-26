import React from "react";
import { useState, useEffect } from "react";
import '../style/SearchSection.scss'
import SearchIcon from '../assets/search.svg'
import Checkbox from "./Checkbox";

const SearchSection = (props) => {

    const handleInput = (event) => {
        props.onInput(event.target.value);
    }

    const [isArtistChecked, setIsArtistChecked] = useState(false);
    const handleCheckedArtist = (isChecked) => {
        setIsArtistChecked(isChecked);
    }

    const [isTrackChecked, setIsTrackChecked] = useState(false);
    const handleCheckedTrack = (isChecked) => {
        setIsTrackChecked(isChecked);
    }

    const [isAlbumChecked, setIsAlbumChecked] = useState(false);
    const handleCheckedAlbum = (isChecked) => {
        setIsAlbumChecked(isChecked);
    }

    useEffect(() => {
        props.onValueChange(isArtistChecked, isTrackChecked, isAlbumChecked)
    }, [isAlbumChecked, isArtistChecked, isTrackChecked])

    return(
        <div className="search-section">
            <h4 className="search-section__title">Search your favourite artist, track or album</h4>
            <div className="search-section__input-section">
                <input onChange={handleInput} type="text" placeholder="Search..." className="search-section__input-section__input" />
                <img onClick={props.onSearch} src={SearchIcon} alt="search" className="search-section__input-section__icon" />
            </div>
            <div className="search-section__checkboxes">
                <Checkbox name='Artist' onCheck={handleCheckedArtist} />
                <Checkbox name='Track' onCheck={handleCheckedTrack} />
                <Checkbox name='Album' onCheck={handleCheckedAlbum} />
            </div>
        </div>
    );
}

export default SearchSection;