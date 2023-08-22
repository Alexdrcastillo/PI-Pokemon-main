<<<<<<< HEAD
import React, {useEffect} from 'react'
import styles from './Detail.module.css'
import { getPokemon, clearPokemon } from '../../Redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import load from '../../images/poke_load.gif'
=======
import { useDispatch, useSelector } from 'react-redux'; //sirven para conectarnos con redux porque vienen de react
import { Link } from 'react-router-dom';
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26



const Detail = () => {
    const dispatch= useDispatch()
    const pokemon=useSelector(state=>state.pokemon)
    const { id }=useParams()
    const hist=useHistory()

<<<<<<< HEAD
    const handleClear=()=>{
      dispatch(clearPokemon())
      hist.push('/home')
    }


    useEffect(()=>{
        dispatch(getPokemon(id))
},[dispatch, id])

console.log(pokemon)
 
if(pokemon){
    return ( 
        <div className={styles.mainContainer}>
            <button className={styles.button} onClick={handleClear}>X</button>     
            <div className={styles.details}>
              <h1 className={styles.name}>{pokemon.payload?.name}</h1>
              <h3 className={styles.types}>{pokemon.payload?.types}</h3>
              <h4>Id: {pokemon.payload?.pokemonId}</h4>
              <h4>Hp: {pokemon.payload?.hp}</h4>
              <h4>Attack: {pokemon.payload?.attack}</h4>
              <h4>Defense: {pokemon.payload?.defense}</h4>
              <h4>Speed: {pokemon.payload?.speed}</h4>
              <h4>Height: {pokemon.payload?.height}</h4>
              <h4>Weight: {pokemon.payload?.weight}</h4>
=======
  return (
    <div className="cards">
    
     <Link to="/home">Home</Link>

      {
      poke.map(pok => {
        return (
            <div style={{marginTop: "700px", marginLeft: "-200px", backgroundColor: "white", textAlign: "center", borderRadius: "20px"}}>
                <h1>{pok.id}</h1>
                <h1>{pok.name}</h1>
                <h1>{pok.types}</h1>
                <img  style={{height: "200px", width: "200px"}} src={pok.image} />
                <h1>{pok.types}</h1>
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26
            </div>
      
              <img src={pokemon.payload?.image ? pokemon.payload?.image : load} alt='pokeImg' className={styles.img}/>
          
      </div>
      )
}}

export default Detail