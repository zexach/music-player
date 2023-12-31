import React from "react";
import { useState, useEffect } from "react";
import '../style/Player.scss'
import alert from '../assets/alert.svg'
import play from '../assets/play.svg'
import pause from '../assets/pause.svg'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'
import Loading from './Loading'
import Trackbar from "./Trackbar";

const Player = (props) => {

    const track = {
        name: "",
        album: {
            images: [
                { url: "" }
            ]
        },
        artists: [
            { name: "" }
        ]
    }

    const [player, setPlayer] = useState(undefined);
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [current_track, setTrack] = useState(track);

    let playerInstance;

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        
        document.body.appendChild(script);
        
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Star Tunes',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);
            playerInstance = player;
            
            player.addListener('ready', async({ device_id }) => {

                await props.onLoad(device_id);

                setTimeout(() => {
                    props.setTrack();
                }, 1000);

            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
            
            player.addListener('player_state_changed', ( state => {
                
                if (!state) {
                    return;
                }
                
                setTrack(state.track_window.current_track);
                setPaused(state.paused);
                
                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });
                
            }));
            
            player.connect();
        };
        
        return () => {
            if(playerInstance) {
                playerInstance.removeListener('ready');
                playerInstance.disconnect();
                console.log('Player disconnected');
            }
        };

    }, []);

    useEffect(() => {
        props.onTrack(current_track);
    }, [current_track])


    if(!is_active){ 
        return (
            <Loading />
        )
    }
    else{
        return (
            <>
            { current_track ? 

                <div className="player">
                    <img src={current_track.album.images[0].url} className="player__now-playing__cover" alt="" />
                    <div className="player__now-playing__side">
                        <div className="player__now-playing__side__details">
                            <h3 className="player__now-playing__side__details__name">{current_track.name}</h3>
                            <p className="player__now-playing__side__details__artist">{current_track.artists[0].name}</p>
                        </div>
                        <div className="player__now-playing__side__buttons">
                            <button className="player__now-playing__side__buttons__btn-spotify" onClick={() => { player.previousTrack() }} >
                                <img src={leftarrow} alt="leftarrow" />
                            </button>
                            <button className="player__now-playing__side__buttons__btn-spotify" onClick={() => { player.togglePlay() }} >
                                { is_paused ? <img src={play} alt="play" /> : <img src={pause} alt="pause" /> }
                            </button>
                            <button className="player__now-playing__side__buttons__btn-spotify" onClick={() => { player.nextTrack() }} >
                                <img src={rightarrow} alt="rightarrow" />
                            </button>
                        </div>
                        <Trackbar track={current_track} isPaused={is_paused} duration={current_track.duration_ms} />
                    </div>
                </div>

                :

                <Loading />

            }
            </>
        );
    }
}

export default Player;