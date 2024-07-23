import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';

function App() {
  return (
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
