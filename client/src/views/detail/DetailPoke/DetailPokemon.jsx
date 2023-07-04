import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../../../redux/actions'


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
    <div style={{alignItems: "center", alignContent: "center", margin: "auto", textAlign: "center"}}>
      <Link to="/home">Home</Link>
         <h1> name : {pokemon.payload?.name}</h1>
              <h3> type :{pokemon.payload?.types}</h3>
              <h4>Id: {pokemon.payload?.id}</h4>
              <img style={{height: "150px", width: "150px"}} src={pokemon.payload?.image} />
              <h4>Hp: {pokemon.payload?.hp}</h4>
              <h4>Attack: {pokemon.payload?.attack}</h4>
              <h4>Defense: {pokemon.payload?.defense}</h4>
    </div>
  )
}

export default DetailPokemon