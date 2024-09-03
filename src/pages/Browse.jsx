import React, { useEffect, useState } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { platformType, request } from '../helper/apiRequest';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { fetchNowplayingMovies, selectNowplayingMovies } from '../features/movie/movieSlice';
import axios from '../helper/axios';
import { shuffle } from '../helper';
import MovieRow from '../components/MovieRow';

function Browse(props) {
    const dispatch=useDispatch()
    const {platform}=useParams();
    //(state)=>state.movie.nowPlayingMovies
    //(state)=>state.tv.netflixOriginals
    const {data,status,error}=useSelector(
        platform === "tv" ? selectNetflixOriginals :selectNowplayingMovies
        )
    
        const [genreList,setGenreList]=useState(null)
                 
        const fetchGenreList=async(platform)=>{
            const response =await axios.get(request.getGenresList(platform))
            setGenreList(shuffle(response.data.genres))
        }

        useEffect(()=>{
            fetchGenreList(platform)
        },[platform]) //without dependcies component load nhi hoga new data ke sath so dependecies ke uuper new data ata hai


    useEffect(()=>{
         if(platform === platformType.tv){
            dispatch(fetchNetflixOriginals())
         }else{
            dispatch(fetchNowplayingMovies())
         }
    },[platform])

    return (
        <>
                {
                
                status==="success" ? <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} /> :"....loading....."
                }
              <div className='px-4'>
                      {
                         genreList ?
                         genreList.map((genre,index)=>(
                            index < 6 ? 
                            <MovieRow  key={genre.id} title={genre.name} genre={genre} platform={platform} />:" "
                         )):" "  
                      }
              </div>    
        </>
    );
}

export default Browse;