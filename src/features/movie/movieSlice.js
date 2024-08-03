import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios"
import { endpoints, platformType, request } from "../../helper/apiRequest"



const initialState={
    upcomingMovies:{
        status:'idle',
        data :null,
        error:null
    },
    nowPlayingMovies:{
        status:'idle',
        data:null,
        error:null
    },
    topRatedMovies:{
        status:'idle',
        data:null,
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

export const fetchNowplayingMovies=createAsyncThunk(
    'movie/fetchNowplayingMovies',
    async()=>{
        const response= await instance.get(request.getCollections(platformType.movie,endpoints.nowPlaying))
        return response.data
    }      
) 
export const fetchTopRatedMovies=createAsyncThunk(
    "movie/fetchTopRatedMovies",
    async()=>{
        const response= await instance.get(request.getCollections(platformType.movie,endpoints.topRated))
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
            state.upcomingMovies.error=action.error;  
        })
        
          //nowPlaying data fetching here...

        .addCase(fetchNowplayingMovies.pending,(state)=>{
            state.nowPlayingMovies.status="loading";
        })
        .addCase(fetchNowplayingMovies.fulfilled,(state,action)=>{
            state.nowPlayingMovies.status="success"
            state.nowPlayingMovies.data=action.payload
        })
        .addCase(fetchNowplayingMovies.rejected,(state,action)=>{
            state.nowPlayingMovies.status="failed"
            state.nowPlayingMovies.error=action.error;
        })

        //toprated movies

        .addCase(fetchTopRatedMovies.pending,(state)=>{
            state.topRatedMovies.status="loading"
        })
        .addCase(fetchTopRatedMovies.fulfilled,(state,action)=>{
            state.topRatedMovies.status="success"
            state.topRatedMovies.data=action.payload
        })
        .addCase(fetchTopRatedMovies.rejected,(state,action)=>{
            state.topRatedMovies.status="failed"
            state.topRatedMovies.error=action.error
        })



     


    }
})

export const selectUpcomingMovies =(state)=>state.movie.upcomingMovies;

//select nowPlaying data
export const selectNowplayingMovies =(state)=>state.movie.nowPlayingMovies;

//selecting topRatedMovies
export const selectTopRatedMovies=(state)=>state.movie.topRatedMovies

export default movieSlice.reducer;


//slice complete krna hai 