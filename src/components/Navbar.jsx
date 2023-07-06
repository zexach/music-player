import React from "react";
import { useState } from "react";
import musicLogo from '../assets/music.svg'
import searchIcon from '../assets/search.svg'
import albumsIcom from '../assets/albums.svg'
import artistsIcon from '../assets/artists.svg'
import genresIcon from '../assets/genres.svg'
import homeIcon from '../assets/home.svg'
import '../style/Navbar.scss'
import NavbarElement from "./NavbarElement";

const Navbar = () => {

    const [menu, setMenu] = useState([
        {icon: homeIcon, page: 'Home', path: '/'},
        {icon: searchIcon, page: 'Explore', path: '/explore'},
        {icon: genresIcon, page: 'Genres', path: '/genres'},
        {icon: albumsIcom, page: 'Albums', path: '/albums'},
        {icon: artistsIcon, page: 'Artists', path: '/artists'}
    ]);

    return(
        <>
            <div className="navbar">
                <div className="navbar__title">
                    <img src={musicLogo} alt="" />
                    <h2 className="navbar__title__app-name">Star Tunes</h2>
                </div>
                <div className="navbar__content">
                    {menu.map((item, index) => <NavbarElement key={index} icon={item.icon} title={item.page} path={item.path} /> )}
                </div>
            </div>
        </>
    );
}

export default Navbar;