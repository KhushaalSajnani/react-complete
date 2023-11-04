import {createSlice} from "@reduxjs/toolkit";
import {resetBothLists} from "../CommonActions";


const songSlice = createSlice({
    name: "songs",
    initialState: [],
    reducers: {
        addNewSong(state,action){
            state.push(action.payload);
        },
        removeSong(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        },
        // resetSongList(state,action){
        //     return [];
        // }
    },
    extraReducers(builder){
        builder.addCase(resetBothLists,(state,action)=>{
            return [];
        })
    }
})


export const songsReducer = songSlice.reducer;

export const {addNewSong, removeSong} = songSlice.actions;
