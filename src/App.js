import React from 'react';
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import './styles.css'

// import {resetBothLists} from "./store";
import {useDispatch} from "react-redux";
import {resetBothLists} from "./store/CommonActions";

function App(props) {

    const dispatch = useDispatch()
    const handleResetClick = () => {
        //
        dispatch(resetBothLists())
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}

export default App;
