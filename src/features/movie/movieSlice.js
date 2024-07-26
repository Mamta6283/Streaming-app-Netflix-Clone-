import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios"
import { endpoints, platformType, request } from "../../helper/apiRequest"
import { act } from "react"

const initialState={
    upcomingMovies:{
        status:'idle',
        data :null,
        error:null
    }
   
}

export const fetchUpcomingMovies=createAsyncThunk(
    'movie/fetchUpcomigMovies', //this is action jo match hoga
    async()=>{
        const response = await instance.get(request.getCollections(platformType.movie,endpoints.upcoming))
       return response.data
    }
)

export const movieSlice =createSlice({
    name:'movie',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{    //addcase have two parameteres first datacollectionname ,and reducers 
        builder
        .addCase(fetchUpcomingMovies.pending,(state)=>{    
            state.upcomingMovies.status="loading";
        }) 

        .addCase(fetchUpcomingMovies.fulfilled,(state,action)=>{    
            state.upcomingMovies.status="success";
            state.upcomingMovies.data=action.payload;

        }) 
        .addCase(fetchUpcomingMovies.rejected,(state,action)=>{
            state.upcomingMovies.status="failed";
            state.upcomingMovies.error=action.payload;
        })


    }
})

export const selectUpcomingMovies =(state)=>state.movie.upcomingMovies;

export default movieSlice.reducer;


//slice complete krna hai 