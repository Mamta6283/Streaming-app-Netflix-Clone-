import axios from '../helper/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../helper/apiRequest';
import Card from '../components/Card';
import { shuffle } from '../helper';

function BrowseBYGenre(props) {
    const {platform ,genreid} =useParams();
    const [videosByGenre ,setVideosByGenre]=useState(null)
    const[currentPlatform ,setCurrentPlatform]=useState(null)

const fetchVideoByGenre=async(platform ,id)=>{
    const response= await axios.get(request.getDataByGenre(platform ,id))
   setVideosByGenre(response.data.results)
}

const [genreList,setGenreList]=useState(null)

const fetchGenreList=async(platform)=>{
    const response =await axios.get(request.getGenresList(platform))
    // console.log(response.data.results)
    setGenreList(response.data.genres)
}

const handlePlatform = (e)=>{
      fetchGenreList(e.target.value);
      setCurrentPlatform(e.target.value)
}
const handleGenre = (e) =>{
    fetchVideoByGenre(currentPlatform,e.target.value)
    
}
useEffect(()=>{
    fetchVideoByGenre(platform,genreid)
},[])

    return (
        <div className='py-28 px-60 left-10 bg-gradient-to-tr from-slate-950  h-full  top-0 '>
            <div className='flex py-4 left-10 '>
                <select onChange={handlePlatform}>

                    <option selected disabled >select type</option>
                    <option value="tv">Tv </option>
                    <option value="movie">Movie</option>
                </select>

                <select onChange={handleGenre}>
                    <option selected disabled> Select Genre</option>
                    { 
                    genreList?.map((genre)=>(
                          
                        <option value={genre?.id}>{genre.name}</option>
                    ))
                     }
                </select>
            </div>

            <div className='flex gap-4 flex-wrap left-24'>
                {
                     videosByGenre?.map((video)=>(

                <div key={video?.id} className='w-1/5'>
                <Card  video={video} platform={platform}></Card>
                </div>      
                    ))
                }
            </div>
        </div>
    );
}

export default BrowseBYGenre;