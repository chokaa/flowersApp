import React from 'react';
import { Header } from './app/components/header/Header';
import { MainArea } from './app/components/mainArea/MainArea';
import { Footer } from './app/components/footer/Footer';


export default function App() {
  return (
    <div className='app-container'>
      <Header />
      <MainArea />
      <Footer />
    </div>
  )
}
