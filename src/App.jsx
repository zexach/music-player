import './style/App.scss'
import { useState } from 'react'
import Login from './pages/Login'
import MusicApp from './pages/MusicApp'

const App = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <>
            {token === null
              ? <Login /> : <MusicApp />}
        </>
    )
}

export default App
