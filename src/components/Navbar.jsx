import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        
             <nav className='bg-gradient-to-b from-slate-950 to-transparent text-white fixed w-full z-50 transition-colors duration-300'>
            <div className='px-4 flex items-center gap-4 min-w-'>
                <div className='py-2'>
                    <Link to="/" className='text-2xl font-bold'>Streaming App</Link>
                    {/* <img className='w-50 h-50' src='./assets/netflix.png' alt=''/> */}
                </div>
                <div className='flex items-center'>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/">Home</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/tv">Tv Shows</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/movie">Movies</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/browse">Browse By Genre</Link>
                </div>
     
            </div>
        </nav>
    );
}

export default Navbar;