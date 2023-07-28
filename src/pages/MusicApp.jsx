import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Explore from './Explore'
import SingleArtist from "./SingleArtist";
import Track from "./Track";
import '../style/App.scss'

const MusicApp = () => {

    return(
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='explore' element={<Explore />} />
                <Route path='artist/:id' element={<SingleArtist />} />
                <Route path='track/:id' element={<Track />} />
            </Routes>
        </div>
    );
}

export default MusicApp;