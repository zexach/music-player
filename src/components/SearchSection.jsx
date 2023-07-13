import React from "react";
import { useState } from "react";
import '../style/SearchSection.scss'
import SearchIcon from '../assets/search.svg'
import Checkbox from "./Checkbox";

const SearchSection = (props) => {

    const checkboxes = ['Artist', 'Track', 'Album'];

    const handleInput = (event) => {
        props.onInput(event.target.value);
    }

    return(
        <div className="search-section">
            <h4 className="search-section__title">Search your favourite artist, track or album</h4>
            <div className="search-section__input-section">
                <input onChange={handleInput} type="text" placeholder="Search..." className="search-section__input-section__input" />
                <img src={SearchIcon} alt="search" className="search-section__input-section__icon" />
            </div>
            <div className="search-section__checkboxes">
                { checkboxes.map((checkbox, index) => <Checkbox key={index} name={checkbox} />) }
            </div>
        </div>
    );
}

export default SearchSection;