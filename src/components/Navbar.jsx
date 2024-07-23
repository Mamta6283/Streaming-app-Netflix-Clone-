import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <div className='flex px-4 py-3 gap-2'>
                <div className='max-w-40'>
                    <h4 className='text-lg'>Streaming App</h4>

                </div>
                <div className='flex gap-4'>
                    <Link to="/" className='px-2 text-violet-950 font-medium'>Home</Link>
                    <Link to="/tv" className='px-2 text-violet-950 font-medium'>Tv Shows</Link>
                    <Link to="/movie" className='px-2 text-violet-950 font-medium'>Movie</Link>
                    <Link to="/browse" className='px-2 text-violet-950 font-medium'>Browser By Genre</Link>

                </div>

            </div>
        </div>
    );
}

export default Navbar;