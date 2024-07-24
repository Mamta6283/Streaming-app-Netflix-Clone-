import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios  from "../../helper/axios"
import instance from "../../helper/axios"
import { request } from "../../helper/apiRequest"

//intial value
const initialState ={
     netflixOriginals:{
             status : "idle",
             data: null,
             error: null

     }
}


// {type :" 'tv/fetchNetflixOriginals'  " payload:""}
//optional -actions or async  actions 
export const fetchNetflixOriginals =createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async()=>{
        const response =await axios.get(request.getDataByNetwork(213))
        return response.data;

    }  
);

//createSlice method when we use this then we have to use these key values
export const tvSlice =createSlice({
             initialState,
             name:"tv",
             reducers:{},
             extraReducers:(builder)=>{
                builder
                .addCase(fetchNetflixOriginals.pending,(state)=> {
                    state.netflixOriginals.status="......Loading......";
                    
                })
                .addCase(fetchNetflixOriginals.fulfilled,(state,action)=> {
                    state.netflixOriginals.status="***SUCCESS***";
                    state.netflixOriginals.data=action.payload
                })
                .addCase(fetchNetflixOriginals.rejected,(state,action)=> {
                    state.netflixOriginals.status="failed";
                    state.netflixOriginals.error= action.error;
                })
              }  //api call se data and actions are gonna handle by this reducers
})

//actions export



//optional selectors export
export const selectNetflixOriginals=(state)=>state.tv.netflixOriginals



//expert slice
export  default tvSlice.reducer;