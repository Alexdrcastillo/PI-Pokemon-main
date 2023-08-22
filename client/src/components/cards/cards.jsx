<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
import noImg from '../../images/poke_load.gif'
=======
import { useState } from 'react';
import Card from '../card/card';
import styles from "./cards.module.css"
import { useNavigate } from 'react-router-dom';

function Cards({allPokemons}) {
  const pokemonsList = allPokemons;
  const navigate = useNavigate()

  const [id, setId] = useState("");

  const handleClick = (id) => {
    navigate(`/detail/${id}`)
    setId(id)
  }
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26

const Cards = ({id, name, image, types, type}) => {
  return (
<<<<<<< HEAD
    <div className={styles.main}>
       <Link to={`/detail/${id}`} style={{textDecoration:"none"}}>
        <h4 className={styles.id}>#00{id}</h4>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.types}>Type: {types ? types:type}</h3>
        <img src={image ? image : noImg} alt={name} className={styles.img}/>
      </Link>
=======
    <div className={styles.pokemons}>
      {pokemonsList?.slice(0,12).map(pokemon =>  // metodo array se utiliza para obtener una porcion del array 
        <Card pokemon = {pokemon} key={pokemon.id} onClick={() => handleClick(pokemon.id)} id={id} />
        )
        }
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26
    </div>
  )
}

<<<<<<< HEAD
export default Cards
=======

export default Cards;
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26
