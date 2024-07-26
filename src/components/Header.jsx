import React from 'react';
import { IMG_URL } from '../helper/apiRequest';

function Header(props) {
    const {video}=props;
    console.log(video)
    return (
        <div className='relative h-dvh'>
            <img className='w-full h-full object-cover object-center block' src={`${IMG_URL+video?.backdrop_path}`} alt='loading'/>
            <div className='text-white absolute left-20 z-10 top-1/2 -translate-y-1/2 '>

                <h1 className='text-white text-6xl '>{video?.name || video?.original_name || video?.title || video?.original_title}</h1>
                <h2 className='max-w-90 text-white text-1xl max-w-md font-serif'>{video.overview}</h2>
            </div>
            <div className='absolute bg-gradient-to-r from-slate-950 h-full left-0 top-0  w-1/2 '>

            </div>
            
        </div>
    );
}

export default Header;

//.abc:background:rgba(0,0,0,0.6)   
// {
//     height:100%
//     width:50%
//opacity you can use z-index you can use
// }