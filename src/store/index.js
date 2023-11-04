// import {createSlice, configureStore, createAction} from '@reduxjs/toolkit';
// export const resetBothLists = createAction("reset/playlists")
// const songSlice = createSlice({
//     name: "songs",
//     initialState: [],
//     reducers: {
//         addNewSong(state,action){
//             state.push(action.payload);
//         },
//         removeSong(state,action){
//             const index = state.indexOf(action.payload);
//             state.splice(index,1);
//         },
//         // resetSongList(state,action){
//         //     return [];
//         // }
//     },
//     extraReducers(builder){
//         builder.addCase(resetBothLists,(state,action)=>{
//             return [];
//         })
//     }
// })
// const movieSlice = createSlice({
//     name : 'movies',
//     initialState: [],
//     reducers:{
//         addNewMovie(state,action){
//             state.push(action.payload);
//         },
//         removeMovie(state,action){
//             const index = state.indexOf(action.payload);
//             state.splice(index,1);
//         },
//     },
//     // extraReducers(builder){
//     //     builder.addCase(songSlice.actions.resetSongList,(state,action)=>{
//     //         return [];
//     //     })
//     // }
//     extraReducers(builder){
//         builder.addCase(resetBothLists,(state,action)=>{
//             return [];
//         })
//     }
// })
//
// export const store = configureStore({
//     reducer:{
//         songs:songSlice.reducer,
//         movies: movieSlice.reducer
//     }
// })
//
// export const {addNewSong, removeSong, resetSongList} = songSlice.actions;
//
// export const {addNewMovie, removeMovie} = movieSlice.actions;


import {configureStore} from "@reduxjs/toolkit";
import {songsReducer} from "./slices/SongSlice";
import {movieReducer} from "./slices/MovieSlice";
import {addNewSong, removeSong} from "./slices/SongSlice";
import {addNewMovie, removeMovie} from "./slices/MovieSlice";


export const store = configureStore({
    reducer:{
        songs: songsReducer,
        movies: movieReducer
    }
})


export {addNewMovie, addNewSong, removeSong, removeMovie};
