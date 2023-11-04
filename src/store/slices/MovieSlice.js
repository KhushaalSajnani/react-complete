import {createSlice} from "@reduxjs/toolkit";
import {resetBothLists} from "../CommonActions";

const movieSlice = createSlice({
    name : 'movies',
    initialState: [],
    reducers:{
        addNewMovie(state,action){
            state.push(action.payload);
        },
        removeMovie(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        },
    },
    // extraReducers(builder){
    //     builder.addCase(songSlice.actions.resetSongList,(state,action)=>{
    //         return [];
    //     })
    // }
    extraReducers(builder){
        builder.addCase(resetBothLists,(state,action)=>{
            return [];
        })
    }
})


export const movieReducer = movieSlice.reducer;

export const {addNewMovie,removeMovie} = movieSlice.actions;
