import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoDetails, selectViedoDetails } from '../features/common/commonSlice';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { IMG_URL } from '../helper/apiRequest';
import Ratings from '../components/Ratings';
import Genres from '../components/Genres';
import Card from '../components/Card';

function Details(props) {
    const {data ,status ,error}=useSelector(selectViedoDetails)
    const {platform,id}=useParams()
    
    const dispatch= useDispatch()
      
    useEffect(()=>{
        if(platform && id){
        dispatch(fetchVideoDetails({type:platform, id:id}))
        }
    },[platform ,id])  
    return (
        <div className='h-dvh py-28 bg-primary-600 text-white'>
            <div className='max-w-7xl mx-auto'>
                <VideoPlayer videos={data?.videos.results}/>
                </div>
            
            <div className='px-4 flex bg-primary-600'>
                <div className='px-4 py-10 w-1/3 '>
                    <img className='max-w-full rounded-md' src={IMG_URL+data?.poster_path} alt="" />
               
                
                    <img className='max-w-full py-4 w-full  rounded-md' src={IMG_URL+data?.backdrop_path} alt="" />
                    <img className='max-w-full py-4 w-full  rounded-md' src={IMG_URL+data?.backdrop_path} alt="" />
                    { data?.tagline ?
                    <h3 className='font-display text-2xl mb-1 text-white'>{data?.tagline}</h3> :""
                     } 


                </div>
                <div className='px-4 w-3/4'>
                <div className='py-3'>
                    <h1 className='font-display text-6xl mb-1 text-white'>{data?.title || data?.name || data?.original_title || data?.original_name}</h1>
                    { data?.tagline ?
                    <h3 className='font-display text-4xl mb-1 text-white'>{data?.tagline}</h3> :""
                     } 
        <h2 className=' font-displaymax-w-90 text-white text-1xl max-w-md '>{data?.overview}</h2>

                     <div className='mt-4'>
                             <Ratings voteCount={data?.vote_count} voteAverage={data?.vote_average}></Ratings>
                             <hr className='my-4'></hr>
                             <Genres genres={data?.genres}></Genres>
                     </div>
                     <div className='py-4'> 
                        <h1>recommendations {platform === 'tv' ? "tv shows" : "Movies"}</h1>
                        <div className='flex flex-wrap'>
                            {
                                data?.recommendations.results.map((video ,index)=>(
                                    index < 6 ?
                                    <div className='w-1/3 p-4'>
                                        <Card video={video} platform={platform}></Card>

                                    </div>:""
                                ))
                            } 
                            <div className='py-4'>
                            <h1>similar {platform === 'tv' ? "tv shows" : "Movies"}</h1>
                            <div className='flex flex-wrap'>

                              {
                                   data?.similar.results.map((video ,index)=>(
                                    index < 6 ?
                                    <div className='w-1/3 p-4'>
                                        <Card video={video} platform={platform}></Card>
                                        
                                    </div>:""
                                ))
                            }
                            </div>
                             </div>

                        </div>
                       
                     </div>
                           
                </div>

                </div>

            </div>
           
        </div>
      
    );
}

export default Details;