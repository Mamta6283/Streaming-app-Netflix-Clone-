import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const {videos ,setShowVideo} =props;
    const [trailer ,setTrailer]=useState(null)
console.log(trailer)
    useEffect(()=>{
        if(videos){
            let filteredVideo =videos.find((item)=> item.type=== "Trailer");
            setTrailer(filteredVideo)
        }
    })
    return (
        <div>
            <iframe className='w-full h-dvh' width="560" height="315" src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen >
            
{/* <button className='px-4 py-3 bg-slate-900 text-white rounded-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>CloseVideo</button> */}
            
            </iframe>
            <div className='flex justify-center'>
            <button className='px-4 py-3  bg-yellow-700 text-white rounded-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={()=>setShowVideo(false)}>CloseVideo</button>
            </div>
        </div>
        
        
    );
}

export default VideoPlayer;