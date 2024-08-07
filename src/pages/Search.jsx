import { useSelector } from 'react-redux';
import { request } from '../helper/apiRequest';
import axios from '../helper/axios';
import React, { useEffect, useState } from 'react';
import { selectSearchParams } from '../features/common/commonSlice';
import Card from '../components/Card';

function Search(props) {
    const[videoBySearch ,setVideoBySearch]=useState()
    const{platform ,query}=useSelector(selectSearchParams)
    const fetchBySearch= async()=>{
        const response= await axios.get(request.getBySearch(platform,query));
        setVideoBySearch(response.data)
    }
    useEffect(()=>{
        if(platform,query){
        fetchBySearch(platform,query)
        }
    },[platform,query])
    return (
        <div className='py-28 px-4'>
              
            <div className='flex gap-4 flex-wrap left-24'>
                {
                     
                     videoBySearch?.results.map((video)=>(

                <div key={video?.id} className='w-1/5'>
                <Card  video={video} platform={platform}></Card>
                </div>      
                    ))
                }
            </div>
        </div>
    );
}

export default Search;