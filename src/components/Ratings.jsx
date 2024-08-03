import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Ratings(props) {
    const{voteAverage,voteCount}=props
    let vote=Math.floor(voteAverage / 2);
    const stars=[...Array(5)];

  return (
        <div className='flex'>
            <div>
            {
             stars.map((item , index)=>(
                  index < vote ?
                 <FontAwesomeIcon key={index} icon={solidStar} />:
                 <FontAwesomeIcon key={index} icon={faStar}/>
             )) 
}    
</div>
<p>{voteCount}</p>
        </div>
    );
}

export default Ratings;