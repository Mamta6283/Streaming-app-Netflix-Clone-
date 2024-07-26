import React from 'react';
import { IMG_URL } from '../helper/apiRequest';

function MovieCard(props) {
    const {video}=props
    return (
        <div className='rounded-sm '>
              <img className='w-full  block' src={`${IMG_URL+video?.backdrop_path}`} alt='loading'/>
            
        </div>
    );
}

export default MovieCard;