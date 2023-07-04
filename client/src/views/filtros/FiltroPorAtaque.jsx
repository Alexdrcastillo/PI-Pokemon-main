import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPokemons } from '../../redux/actions'; 
import styles from "./filtroattack.module.css";

const FiltroPorAtaque = ({ onShowCards }) => {
  const [attackValue, setAttackValue] = useState(0)
  const [pokemon, setPokemon] = useState([])
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons)
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setAttackValue(value);
    // Aquí puedes filtrar los Pokémon por ataque
    const filteredPokemons = allPokemons.filter(pokemon => pokemon.attack >= value)
    // Aquí puedes actualizar el estado con los Pokémon filtrados
    setPokemon(filteredPokemons)
    console.log(filteredPokemons)
    dispatch(getPokemons(filteredPokemons))
    onShowCards(false)
  }

  const handleClick = (id) => {
    navigate(`/detail/${id}`)
  }

  console.log(attackValue)

  return (
    <div className={styles.container}> 
 
      <h1>Ataque</h1>

      <button onClick={() => handleButtonClick(0)}>0</button>
      <button onClick={() => handleButtonClick(10)}>10</button>
      <button onClick={() => handleButtonClick(20)}>20</button>
      <button onClick={() => handleButtonClick(30)}>30</button>
      <button onClick={() => handleButtonClick(40)}>40</button>
      <button onClick={() => handleButtonClick(50)}>50</button>
      <button onClick={() => handleButtonClick(60)}>60</button>
      <button onClick={() => handleButtonClick(70)}>70</button>
      <button onClick={() => handleButtonClick(80)}>80</button>
      <button onClick={() => handleButtonClick(90)}>90</button>
      <button onClick={() => handleButtonClick(100)}>100</button>

      <div className={styles.pokemons}>
      {
        pokemon.map(pokemo => {
          return (
            <div style={{backgroundColor: "lightgray", margin: "20px"}} onClick={() => handleClick(pokemo.id)}>
              <h1>{pokemo.name}</h1>
              <img style={{width: "150px", height: "150px"}} src={pokemo.image}/>
              <h1>{pokemo.types}</h1>
            </div>
          )
        })
      }      
      </div>

    </div>
  )
}

export default FiltroPorAtaque
