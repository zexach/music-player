import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style/App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  
    const router = createBrowserRouter([
        {path: '/explore', element: <Navbar />}
    ])

    return (
        <div className='app'>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
