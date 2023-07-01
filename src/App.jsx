import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Login from './pages/Login'

const App = () => {

    return (
        <Login />
        /*<div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='explore' element={<Explore />} />
            </Routes>
        </div>*/
    )
}

export default App
