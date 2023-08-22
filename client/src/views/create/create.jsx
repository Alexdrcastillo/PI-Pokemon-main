import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import fondo from "../../images-videos/fondo.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../redux/actions';

const Create = () => {

  const dispatch = useDispatch()
  const types = useSelector(state => state.types)


  useEffect(() => {
    dispatch(getTypes())
  }, [])

   const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};

  if (pokemon.id === "") {
    newErrors.id = "El ID es obligatorio";
  }

  if (pokemon.name === "") {
    newErrors.name = "El nombre es obligatorio";
  }

  if (pokemon.hp === "") {
    newErrors.hp = "El HP es obligatorio";
  }

  if (pokemon.attack === "") {
    newErrors.attack = "El ataque es obligatorio";
  }

  if (pokemon.defense === "") {
    newErrors.defense = "La defensa es obligatoria";
  }

  if (pokemon.type1 === "") {
    newErrors.type1 = "El tipo 1 es obligatorio";
  }

  setErrors(newErrors);
};


  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    type1: "",
    type2: ""
  });


  const handleChange = (event) => {
       setPokemon({
         ...pokemon,
         [event.target.name]: event.target.value
       });
  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateForm();

    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/create', pokemon);
      alert("pokemon creado")
   } catch (error) {
     console.log(error)
   }
  };


  return (
    <div style={{height: "auto"}}>
    <div style={{marginTop: "300px", marginLeft:"740px", borderRadius: "20px",textAlign: 'center', alignContent: "center", alignItems: "center", justifyContent: "center", display: "flex", flexWrap: "wrap", height: "auto", width: "200px", backgroundColor: "wheat"}}>
      <button>

      <Link to="/home" style={{color: "white", textDecoration: "none"}}>Home</Link>
      </button>
    <form onSubmit={handleSubmit} style={{margin: "20px", borderRadius: "20px"}}>
      
    

      <input
        style={{borderRadius: "6px"}}
        type="text" 
        name="id"
        placeholder="ID"
        value={pokemon.id}
        onChange={handleChange}
      />
      {errors.id && <p>{errors.id}</p>}

      <input
        style={{borderRadius: "6px"}}    
        type="text"
        name="name"
        placeholder="Name"
        value={pokemon.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        style={{borderRadius: "6px"}}     
        type="text"
        name="image"
        placeholder="Image URL"
        value={pokemon.image}
        onChange={handleChange}
      />

      <input
        style={{borderRadius: "6px"}}     
        type="text"
        name="hp"
        placeholder="HP"
        value={pokemon.hp}
        onChange={handleChange}
      />
      {errors.hp && <p>{errors.hp}</p>}

      <input
        style={{borderRadius: "6px"}}
        type="text"
        name="attack"
        placeholder="Attack"
        value={pokemon.attack}
        onChange={handleChange}
      />
      {errors.attack && <p>{errors.attack}</p>}

      <input
       style={{borderRadius: "6px"}}
       type="text"
        name="defense"
        placeholder="Defense"
        value={pokemon.defense}
        onChange={handleChange}
      />
      {errors.defense && <p>{errors.defense}</p>}

      <input
        type="text"
        style={{borderRadius: "6px"}}
        name="type"
        placeholder="Type"
        value={pokemon.type}
        onChange={handleChange}
      />
      {errors.type && <p>{errors.type}</p>}


      <button type="submit">Create Pokemon</button>
    </form>
    </div>
    </div>
  );
};

export default Create;
