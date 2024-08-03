import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios  from "../../helper/axios"
import instance from "../../helper/axios"
import { endpoints, platformType, request } from "../../helper/apiRequest"

//intial value
const initialState ={
     netflixOriginals:{
             status : "idle",
             data: null,
             error: null

     },
     airingTodayTv:{
        status:"idle",
        data:null,
        error:null
     },
      onTheAirTv:{
        status:"idle",
        data:null,
        error:null
      },
      popularTv:{
        status:"idle",
        data:null,
        error:null
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
)
export const fetchAiringTodayTv=createAsyncThunk(
    "tv/fetchAiringTodayTv",
    async()=>{
        const response=await axios.get(request.getCollections(platformType.tv,endpoints.airingToday))
        return response.data
    }
)

export const fetchOnTheAirTv=createAsyncThunk(
    "tv/fetchOnTheAirTv",
    async()=>{
        const response = await axios.get(request.getCollections(platformType.tv , endpoints.onTheAir))
        return response.data
    }
)

export const fetchPopularTv=createAsyncThunk(
    "tv/fetchPopularTv",
    async()=>{
        const response = await axios.get(request.getCollections(platformType.tv ,endpoints.popular))
        return response.data
    }
)

//createSlice method when we use this then we have to use these key values
export const tvSlice =createSlice({
             initialState,
             name:"tv",
             reducers:{},
             extraReducers:(builder)=>{
                builder
                 //api call se data and actions are gonna handle by this reducers
                .addCase(fetchNetflixOriginals.pending,(state)=> {
                    state.netflixOriginals.status="......Loading......";
                    
                })
                .addCase(fetchNetflixOriginals.fulfilled,(state,action)=> {
                    state.netflixOriginals.status="success";
                    state.netflixOriginals.data=action.payload
                })
                .addCase(fetchNetflixOriginals.rejected,(state,action)=> {
                    state.netflixOriginals.status="failed";
                    state.netflixOriginals.error= action.error;
                })

                //airingTodaytv data
                .addCase(fetchAiringTodayTv.pending,(state)=>{
                    state.airingTodayTv.status="loading"

                })
                .addCase(fetchAiringTodayTv.fulfilled,(state,action)=>{
                    state.airingTodayTv.status="success"
                    state.airingTodayTv.data=action.payload
                })
                .addCase(fetchAiringTodayTv.rejected,(state,action)=>{
                    state.airingTodayTv.status="failed"
                    state.airingTodayTv.error=action.error
                })

                //onTheAir tv data
                .addCase(fetchOnTheAirTv.pending,(state)=>{
                    state.onTheAirTv.status="loading"
                
                })
                .addCase(fetchOnTheAirTv.fulfilled,(state,action)=>{
                    state.onTheAirTv.status="success"
                    state.onTheAirTv.data=action.payload
                })
                .addCase(fetchOnTheAirTv.rejected,(state,action)=>{
                    state.onTheAirTv.status="failed"
                    state.onTheAirTv.error=action.error
                })

                //popular tv data
                .addCase(fetchPopularTv.pending,(state)=>{
                    state.popularTv.status="loading"
                    
                })
                .addCase(fetchPopularTv.fulfilled,(state,action)=>{
                    state.popularTv.status="success"
                    state.popularTv.data=action.payload
                })

                .addCase(fetchPopularTv.rejected,(state,action)=>{
                    state.popularTv.status="failed"
                    state.popularTv.error=action.error
                })
              } 
})

//actions export



//optional selectors export
export const selectNetflixOriginals=(state)=>state.tv.netflixOriginals

//airingTodayTv
export const selectAiringTodayTv=(state)=>state.tv.airingTodayTv

//onTheAir tv
export const selectOnTheAirTv=(state)=>state.tv.onTheAirTv

//popular tv
export const selectPopularTv=(state)=>state.tv.popularTv



//expert slice
export  default tvSlice.reducer;