import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowplayingMovies, fetchUpcomingMovies, selectNowplayingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';

import Card from './Card';
import { fetchVideoDetails } from '../features/common/commonSlice';
import axios from '../helper/axios';
import { request } from '../helper/apiRequest';


function MovieRow(props) {
    const {title,action,selector ,platform ,genre}=props;
const {data ,status ,error}=useSelector(genre?(state)=>state.tv.netflixOriginals : selector)
const dispatch =useDispatch();
const [videosByGenre ,setVideosByGenre]=useState(null)

const fetchVideoByGenre=async(platform ,id)=>{
    const response= await axios.get(request.getDataByGenre(platform ,id))
   setVideosByGenre(response.data.results)
}

useEffect(()=>{
    if(genre){
             fetchVideoByGenre(platform,genre.id)
    }else{
    dispatch(action());  //fetchUpcomingMovies here
    dispatch(action())   //fetchNowplayingMovies
    dispatch(action()) //fetchTopRatedMovies
      
    dispatch(action()) //fetchAiringTodayTv
    dispatch(action())// fetchOnTheAirtv
    dispatch(action()) //fetchPopular tv
    }
},[])


    return (
        <div className='py-4'>
            <h3 className='mb-3'>{title }</h3>
            
            {/* <h3 className='mb-3'>{title}</h3> */}

            <Swiper
      spaceBetween={20}
      slidesPerView={5}
      
    >  
    {
        genre ?
    <>
        {
        videosByGenre?
        videosByGenre.map((video)=>(
            <SwiperSlide key={video.id}>
                <Card video={video} platform={platform}></Card>
            </SwiperSlide>
        )) : " "
 
       } 
    </>
:
    <>
    
        {
        data?
        data.results.map((video)=>(
            <SwiperSlide key={video.id}>
                <Card video={video} platform={platform}></Card>
            </SwiperSlide>
        )) : " "
 
       }
    </>
}
        
      
    
    </Swiper>
        </div>
    );
}

export default MovieRow;