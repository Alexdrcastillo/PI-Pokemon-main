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

  return (
    <div className={styles.pokemons}>
      {pokemonsList?.map(pokemon => 
        <Card pokemon = {pokemon} key={pokemon.id} onClick={() => handleClick(pokemon.id)} id={id} />
        )
        }
    </div>
  );
}

export default Cards;