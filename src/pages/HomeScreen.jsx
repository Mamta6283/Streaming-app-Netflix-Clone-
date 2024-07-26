import React, { useEffect  } from 'react';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const {data ,status,error} =useSelector((selectNetflixOriginals))
    // console.log(Math.random())//generating random no between 0 to 1but not including 1
    // console.log(Math.random(Math.floor(5 )))
   
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    },[])
    return (
        <>
              {
                status==="success" ? <Header video={data.results[Math.floor(Math.random() * data.results.length)]} /> :"....loading....."
              }
              <div className='px-4 bg-black'>
                  <MovieRow title="upcomingMovie"> </MovieRow>
                  <MovieRow></MovieRow>
                  <MovieRow></MovieRow>
              </div>
        </>
    );
}

export default HomeScreen;