import React, { useEffect  } from 'react';
import { fetchAiringTodayTv, fetchNetflixOriginals, fetchOnTheAirTv, fetchPopularTv, selectAiringTodayTv, selectNetflixOriginals, selectOnTheAirTv, selectPopularTv } from '../features/tv/tvSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';
import { fetchNowplayingMovies, fetchTopRatedMovies, fetchUpcomingMovies, selectNowplayingMovies, selectTopRatedMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { platformType } from '../helper/apiRequest';
import Ratings from '../components/Ratings';

function HomeScreen(props) {
    const dispatch = useDispatch();
    // const {data,status1,error1}=useSelector((selectNowplayingMovies))
    const {data ,status,error} =useSelector(selectNetflixOriginals)
    // console.log(Math.random())//generating random no between 0 to 1but not including 1
    // console.log(Math.random(Math.floor(5 )))
   
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
        // dispatch(fetchNowplayingMovies());
    },[])
    return (
        <>  
            {
                
                status==="success" ? <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv}  /> :"....loading....."
              }
              <div className='px-4  bg-slate-900 text-white font-display'>
                  <MovieRow title="Upcoming_Movie" action={fetchUpcomingMovies} selector={selectUpcomingMovies} platform={platformType.movie}> </MovieRow>
                  <MovieRow title=" Now_Playing" action={fetchNowplayingMovies} selector={selectNowplayingMovies} platform={platformType.movie} ></MovieRow>
                  <MovieRow title="Top_Rated" action={fetchTopRatedMovies} selector={selectTopRatedMovies} platform={platformType.movie}></MovieRow>

                  <MovieRow title="Airing_Today" action={fetchAiringTodayTv} selector={selectAiringTodayTv} platform={platformType.tv}></MovieRow>
                  <MovieRow title="OnTheAir" action={fetchOnTheAirTv} selector={selectOnTheAirTv} platform={platformType.tv}></MovieRow>
                  <MovieRow title="PopularTvShows" action={fetchPopularTv} selector={selectPopularTv} platform={platformType.tv}></MovieRow>
                  
              </div>
        </>
    );
}

export default HomeScreen;