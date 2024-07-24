import React, { useEffect  } from 'react';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const nfData =useSelector((selectNetflixOriginals))
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    },[])
    return (
        <div>
            HomeScreen
        </div>
    );
}

export default HomeScreen;