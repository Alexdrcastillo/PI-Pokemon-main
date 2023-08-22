import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Creados = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pokemonDb = async () => {
      const response = await axios.get("http://localhost:3001/getmypokemons");
      setPokemons(response.data);
    }
    pokemonDb();
  }, []);

  return (
    <div style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
      <button onClick={() => navigate('/home')}>Ir a inicio</button>
      <div style={{alignContent: "center", alignItems: "center", textAlign: "center", display: "flex", flexWrap: "wrap"}}>
        {pokemons.map(pokemon => {
          return (
            <div key={pokemon.id} style={{margin: "40px", height: "500px", width: "250px", backgroundColor: "wheat", borderRadius: "20px" }}>
              <h1>name: {pokemon.name}</h1>
              <img src={pokemon.image} />
              <h1>hp: {pokemon.hp}</h1>
              <h1>attack: {pokemon.attack}</h1>
              <h1>defense: {pokemon.defense}</h1>
              <h1>tipo: {pokemon.types}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Creados;
