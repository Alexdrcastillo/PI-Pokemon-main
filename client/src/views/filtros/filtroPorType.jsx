import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPokemons } from '../../redux/actions'; 
import styles from "./filtroattack.module.css";

const FiltroPorTypes = ({ onShowCards }) => {
  const [TypeValue, setTypeValue] = useState("")
  const [pokemon, setPokemon] = useState([])
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons)
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setTypeValue(value);
    // Aquí puedes filtrar los Pokémon por type
    const filteredPokemons = allPokemons.filter(pokemon => pokemon.types === value)
    // Aquí puedes actualizar el estado con los Pokémon filtrados
    setPokemon(filteredPokemons)
    console.log(filteredPokemons)
    dispatch(getPokemons(filteredPokemons))
    onShowCards(false)
  }

  const handleClick = (id) => {
    navigate(`/detail/${id}`)
  }

  
  
  const handleShowAll = () => {
    setPokemon(allPokemons)
    dispatch(getPokemons(allPokemons))
  }


  console.log(TypeValue)

  return (
    <div>
        <div className={styles.botones}>
        <section>
  <select onChange={(event) => handleButtonClick(event.target.value)}>
    <option value="normal">normal</option>
    <option value="fighting">fighting</option>
    <option value="poison">poison</option>
    <option value="rock">rock</option>
    <option value="bug">bug</option>
    <option value="ghost">ghost</option>
    <option value="water">water</option>
    <option value="grass">grass</option>
    <option value="psychic">psychic</option>
    <option value="dragon">dragon</option>
    <option value="dark">dark</option>
    <option value="unknown">unknown</option>
    <option value="ground">ground</option>
    <option value="steel">steel</option>
    <option value="ice">ice</option>
    <option value="fairy">fairy</option>
    <option value="flying">flying</option>
    <option value="fire">fire</option>
    <option value="electric">electric</option>
    <option value="shadow">shadow</option>
    <option value="grass & poison">grass & poison</option>
    <option value="fire & flying">fire & flying</option>
    <option value="bug & poison">bug & poison</option>
    <option value="bug & grass">bug & grass</option>
    <option value="normal & flying">normal & flying</option>
    <option value="poison & ground">poison & ground</option> 
  </select> 
</section> 
        </div>

      <button onClick={handleShowAll} style={{marginTop: "30px", height: "40px"}}>All pokemons</button>




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

export default FiltroPorTypes
