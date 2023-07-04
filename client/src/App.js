import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home';
import Landing from './views/landing/landing';
import Cards from './components/cards/cards';
import DetailPokemon from './views/detail/DetailPoke/DetailPokemon.jsx';
import Create from './views/create/create';
import Creados from './views/create/Creados';


function App() {
 

  return (
    <div>

       <Routes>
         <Route path='/detail/:id' element={<DetailPokemon />} />
         <Route path="/home" element={<Home />} />
         <Route path="/create" element={<Create />} />
         <Route path='/' element={<Landing />} /> 
         <Route path='/my-pokemons' element={<Creados />} />
       </Routes>
    </div>
  );
}

export default App;
