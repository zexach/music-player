import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Explore from './Explore'
import '../style/App.scss'

const MusicApp = () => {

    return(
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='explore' element={<Explore />} />
            </Routes>
        </div>
    );
}

export default MusicApp;