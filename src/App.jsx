import './style/App.scss'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import MusicApp from './pages/MusicApp'

const App = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, [token]);

    return (
        <>
            {token !== null ? <MusicApp /> : <Login />}
        </>
    )
}

export default App
