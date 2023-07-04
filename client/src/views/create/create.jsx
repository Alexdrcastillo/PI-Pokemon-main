import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Create = () => {
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    type1: ["grass"],
    type2: ["poison"]
  });

  const handleChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/create', pokemon);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/home">Home</Link>
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={pokemon.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={pokemon.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={pokemon.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hp"
        placeholder="HP"
        value={pokemon.hp}
        onChange={handleChange}
      />
      <input
        type="text"
        name="attack"
        placeholder="Attack"
        value={pokemon.attack}
        onChange={handleChange}
      />
      <input
        type="text"
        name="defense"
        placeholder="Defense"
        value={pokemon.defense}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type1"
        placeholder="Type 1"
        value={pokemon.type1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type2"
        placeholder="Type 2 (optional)"
        value={pokemon.type2}
        onChange={handleChange}
      />
      <button type="submit">Create Pokemon</button>
    </form>
    </div>
  );
};

export default Create;
