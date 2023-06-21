import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'

const App = () => {

    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='explore' element={<Explore />} />
            </Routes>
        </div>
    )
}

export default App
