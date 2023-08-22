import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../../../redux/actions'
import fondo from "../../../images-videos/detail.png"
import styles from "./detail.module.css"


const DetailPokemon = () => {  
  const dispatch= useDispatch()
  const pokemon=useSelector(state=>state.pokemon)
  const { id }=useParams() 

    console.log(pokemon)

   useEffect(() => {
         dispatch(getPokemon(id))
   }, [dispatch, id])

console.log(pokemon)

  return (

    <div className={styles.container}> 
     
      <Link to="/home" style={{marginTop: "30px", marginLeft: "400px" ,position: "absolute", border: "1px solid", height: "25px", width:"80px", textAlign: "center",  backgroundColor: "#cb3234", borderRadius: "10px", zIndex: 767676}}>Home</Link>
      <img src={fondo}  style={{width: "1700px", height: "100%", position: "relative"}} />
      <div style={{width: "200px", height: "30px"}}>
              <img style={{height: "200px", width: "200px", position: "absolute", marginTop: "-800px", marginLeft: "750px", zIndex: 2}} src={pokemon.payload?.image} />
      </div>
    <div style={{textAlign: "center", backgroundColor: "#cb3234", width: "300px", borderRadius: "30px", alignContent: "center", margin: "auto", marginTop: "-700px",position: "absolute", marginLeft: "700px", height: "300px"}} className='cards'>
         <h1> name : {pokemon.payload?.name}</h1>
              <h3> type :{pokemon.payload?.types}</h3>
              <h4>Id: {pokemon.payload?.id}</h4>
              <h4>Hp: {pokemon.payload?.hp}</h4>
              <h4>Attack: {pokemon.payload?.attack}</h4>
              <h4>Defense: {pokemon.payload?.defense}</h4>
              <div style={{position: 'fixed', left: 0}}>
           
      </div>
    </div>

    </div>
  )
}

export default DetailPokemon 