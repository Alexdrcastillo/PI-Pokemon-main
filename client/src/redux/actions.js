import axios from 'axios';
import { GET_POKEMONS, GET_NAME, GET_POKEMON, GET_TYPES, FILTERED_ORDER } from './action-types';

export const getPokemons = (offset) => {
    return async function (dispatch) {
    const pokemonsApi = await axios.get("http://localhost:3001/pokemons?offset="+offset)
    const pokemons = pokemonsApi.data.map((pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            types:pokemon.types,
            attack:pokemon.attack,
            hp:pokemon.hp,
            defense:pokemon.defense,
            speed:pokemon.speed,
            weight:pokemon.weight,
            height:pokemon.height
        }
    })
    dispatch({ 
        type: GET_POKEMONS, 
        payload: pokemons 
    });
    }
}

export const getName = (name) =>{
    return async function(dispatch){
      try {
        const apiData = await axios.get(`http://localhost:3001/pokemon/${name.toLowerCase()}`)
        return dispatch ({type:GET_NAME, payload:apiData.data})   
      } catch (error) {
        console.error(error)
        alert(('ESE POKEMON QUE BUSCAS NO EXISTE'))
      }
    }
  }

  export const getPokemon=(id)=>{
    return async function(dispatch){
      const apiData=await axios.get(`http://localhost:3001/pokemon/${id}`)
      return dispatch ({type:GET_POKEMON, payload: apiData.data})
    }
  }

  
export const getTypes = () => {
  return async function (dispatch) {
  const pokemonTypes = await axios.get(`http://localhost:3001/types`);
  const types = pokemonTypes.data
  dispatch({ 
      type: GET_TYPES, 
      payload: types 
  });
  }
}

export const filterOrder = (order) => {
  return {
      type: FILTERED_ORDER, 
      payload: order
  }
}