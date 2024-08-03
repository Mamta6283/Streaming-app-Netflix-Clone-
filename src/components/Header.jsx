import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../helper/apiRequest';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice';
import Genres from './Genres';
import VideoPlayer from './VideoPlayer';

function Header(props) {
    const {video ,platform}=props;
    // console.log(video)
    const {data,status ,error}=useSelector(selectHeaderDetails)
     const dispatch =useDispatch();
     const [showVideo ,setShowVideo]=useState(false)
     const handleVideo=()=>{
        setShowVideo(true)
     }
     useEffect(()=>{
        if(video){
        dispatch(fetchHeaderDetails({type:platform ,id:video.id}))
        }
     },[video])
    return (
           
        <div className='relative h-dvh'>
            {
                showVideo?
              <VideoPlayer videos={data.videos.results} setShowVideo={setShowVideo}></VideoPlayer>
                :
            <>
            
            <img className='w-full h-full object-cover object-center block' src={`${IMG_URL+data?.backdrop_path}`} alt='loading'/>
            <div className='text-white absolute left-20 z-10 top-1/2 -translate-y-1/2 '>

                <h1 className='font-display text-6xl mb-1'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                <h3 className='font-alernate text-yellow-500 text-3xl mb-2'>{data?.tagline}</h3>
                <h2 className=' font-display max-w-90 text-white text-1xl max-w-md '>{data?.overview}</h2>

                {/* here genres name  */}
                 <Genres genres={data?.genres}></Genres>

                <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count}></Ratings>

                <div className='flex gap-3'>
                      <button className='px-4 py-3 bg-slate-100 text-black rounded-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={handleVideo}>Play</button>
                      <button className='px-4 py-3 bg-slate-900 text-white rounded-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>More Info</button>
                </div>
            </div>
            <div className='absolute bg-gradient-to-r from-slate-950 h-full left-0 top-0  w-1/2 '>
              
                
        
            </div>
            </>
}
            
        

        </div>
    );
}

export default Header;

//.abc:background:rgba(0,0,0,0.6)   
// {
//     height:100%;
//     width:50%;
//opacity you can use z-index you can use
// }