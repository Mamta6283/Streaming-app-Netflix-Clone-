import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import { useDispatch } from 'react-redux';
import { searchQuery } from '../features/common/commonSlice';
import { FaSearch } from "react-icons/fa";


function Navbar(props) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSearch =(e)=>{
        let{value}=e.target;
        if(value.length > 3){
        dispatch(searchQuery({platform :"movie",query: value}))
        navigate("/search")
        }
  
    }

    return (
        
             <nav className='bg-gradient-to-b from-slate-950 to-transparent text-white fixed w-full z-50 transition-colors duration-300'>
            <div className='px-4 flex items-center gap-4 min-w-'>
                <div className='py-2'>
                    {/* <Link to="/" className='text-2xl font-bold'>Netflix App</Link> */}
                     <img className='h-12 w-49  ' src={Logo} alt='netflix' />

                </div>

                <div className='flex items-center'>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/">Home</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/browse/tv">Tv Shows</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/browse/movie">Movies</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/browsebygenre/tv/10765">Browse By Genre</Link>
                </div>
                    <input type='text' className='p-2 border-gray-300 text-black rounded-sm' placeholder='search' onChange={handleSearch}></input> 
                    {/* <div className='p-2 border-gray-300  rounded-sm'>
                    <FaSearch /> 
                    </div>    */}
                    {/* <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition' to="/login">Login</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;