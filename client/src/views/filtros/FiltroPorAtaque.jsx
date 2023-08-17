import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterOrder, getPokemons } from '../../redux/actions'; 
import styles from "./filtroattack.module.css";
import fondo from "../../images-videos/fondo.jpg"

const FiltroPorAtaque = ({ onShowCards, onOrderChange  }) => {


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
    <div style={{position: "absolute",display: "flex" ,textAlign: "center", marginTop: "-200px", width: "20px", marginLeft: "300px"}}> 
  
<div style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
<section style={{marginTop: "30px"}}>
  <label htmlFor="attackValue">Ataque:</label>
  <select id="attackValue" onChange={e => handleButtonClick(e.target.value) }>
    <option value="0">0</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="60">60</option>
    <option value="70">70</option>
    <option value="80">80</option>
    <option value="90">90</option>
    <option value="100">100</option>
  </select>
</section>

      <div style={{marginBottom: "100px",display: "flex", flexWrap: "wrap" ,width: "1900px",marginLeft: "-170px", justifyContent: "center", marginLeft: "-450px"  }}>
      {
        pokemon.map(pokemo => {
          return (
            <div style={{textAlign: "center",backgroundColor: "#D3D3D3", flexWrap: "wrap",margin: "20px",height: "200px", width: "300px", fontSize: "10px", borderRadius: "20px" }} onClick={() => handleClick(pokemo.id)}>
              <h1>{pokemo.name}</h1>
              <img style={{width: "100px", height: "100px"}} src={pokemo.image}/>
              <h1>{pokemo.types}</h1> 
            </div>
          )
        })
      }      
      </div>
</div>

    </div>
  )
}

export default FiltroPorAtaque
