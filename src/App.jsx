import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Middle from './components/Middle';
import About from './components/About';
import Footer from './components/Footer';
import Player from './components/Player';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Banner />
            <Middle />
            <MovieList />
            <About />
            <Footer />
          </>
        }/>
        <Route path='/player/:id' element={<Player/>}/>
      </ Routes>
    </ BrowserRouter>
  )
}
export default App;