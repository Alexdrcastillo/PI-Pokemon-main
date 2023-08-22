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
        <div>
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



      <div className="cards" style={{display: "flex", flexWrap:  "wrap",marginTop: "130px",alignContent: "center", textAlign: "center", alignItems: "center", justifyContent: "center"}} onClick={() => handleClick(pokemon.id)}>
      {
        pokemon.map(pokemo => {
          return (
            <div style={{backgroundColor: "#D3D3D3",height: "1000px" ,margin: "20px", height: "220px", width:"200px", textAlign: "center", borderRadius: "20px", fontFamily: "serif", cursor: "pointer", fontSize: "14px", marginLeft: "30px", marginTop: "-50px"}} onClick={() => handleClick(pokemo.id)}>
              <h1>{pokemo.name}</h1>
              <img style={{width: "100px", height: "100px", paddingTop: "10px"}} src={pokemo.image}/>
              <p style={{fontSize: "15px"}}>{pokemo.types}</p>
            </div>
          )
        })
      }      
      </div>

    </div>
  )
}

export default FiltroPorTypes
