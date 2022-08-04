import React from 'react';
import { Header } from './src/components/header/Header';
import { Home } from './src/components/home/Home';
import { Footer } from './src/components/footer/Footer';
import { Routes, Route } from 'react-router';
import { Favorites } from './src/components/favorites/Favorites';
import { Sightseeing } from './src/components/sightseeing/Sightseeing';
import './App.scss';


export default function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/sightseeing' element={<Sightseeing/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
