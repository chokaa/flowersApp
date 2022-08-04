import React from 'react';
import { Header } from './app/components/header/Header';
import { Home } from './app/components/home/Home';
import { Footer } from './app/components/footer/Footer';
import { Routes, Route } from 'react-router';
import { Favorites } from './app/components/favorites/Favorites';
import { Sightseeing } from './app/components/sightseeing/Sightseeing';
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
