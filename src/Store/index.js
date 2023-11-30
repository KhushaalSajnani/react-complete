import {createSlice, configureStore} from "@reduxjs/toolkit";
import {fetchUsers} from "./Thunks/fetchUsersThunk";

const userSlice = createSlice({
    name:'users',
    initialState:
        {
            data:[],
            isLoading:false,
            error:null
        },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled,(state,action) => {
            state.data=action.payload;
            state.isLoading=false;
        })
        builder.addCase(fetchUsers.pending,(state,action) =>{
            state.isLoading=true;
        })
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.isLoading = false;
            state.error=action.payload;
        })
    }
})

export const store = configureStore({
    reducer:{
        users:userSlice.reducer
    }
})

export * from './Thunks/fetchUsersThunk';