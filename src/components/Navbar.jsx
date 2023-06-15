import React from "react";
import { useState } from "react";
import musicLogo from '../assets/music.svg'
import searchIcon from '../assets/search.svg'
import albumsIcom from '../assets/albums.svg'
import artistsIcon from '../assets/artists.svg'
import genresIcon from '../assets/genres.svg'
import '../style/Navbar.scss'
import NavbarElement from "./NavbarElement";

const Navbar = () => {

    const [menu, setMenu] = useState([
        {
            icon: searchIcon,
            page: 'Explore'
        },
        {
            icon: genresIcon,
            page: 'Genres'
        },
        {
            icon: albumsIcom,
            page: 'Albums'
        },
        {
            icon: artistsIcon,
            page: 'Artists'
        }
    ]);

    return(
        <div className="navbar">
            <div className="navbar__title">
                <img src={musicLogo} alt="" />
                <h2 className="navbar__title__app-name">Star tunes</h2>
            </div>
            <div className="navbar__content">
                {menu.map((item, index) => <NavbarElement key={index} icon={item.icon} title={item.page} />)}
            </div>
        </div>
    );
}

export default Navbar;