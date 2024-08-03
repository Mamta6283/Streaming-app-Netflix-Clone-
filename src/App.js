import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Browse from './pages/Browse';
import BrowseBYGenre from './pages/BrowseBYGenre';

function App() {
  return (
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
          <Route path='/details/:platform/:id' element={<Details></Details>}></Route>
          <Route path='/browse/:platform' element={<Browse></Browse>}></Route>
          <Route path='/browsebygenre/:platform/:genreid' element={<BrowseBYGenre></BrowseBYGenre>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
