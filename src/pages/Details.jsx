import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoDetails, selectViedoDetails } from '../features/common/commonSlice';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

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
           
        </div>
    );
}

export default Details;