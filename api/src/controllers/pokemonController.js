const express = require("express")
const axios = require("axios")
const { Pokemon, Type } = require("../db")

const pokemonFormater = (element)=>{
  return {
      id:element?.id,
      name:element?.name,
      hp:element.stats[0]?.base_stat,  
      attack: element.stats[1]?.base_stat,
      defense:element.stats[2]?.base_stat,
      speed:element.stats[5]?.base_stat, 
      height:element?.height,
      weight:element?.weight,
      types:element.types?.map((t)=>t.type.name).join(" & "),
      image:element.sprites?.other.dream_world.front_default,
  }
}

//  GET | /pokemons
// Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
const getAllPokemons = async (offset, createdByUser) => {  
  const pokemonsDb = await Pokemon.findAll({   
    where: {
        createdByUser: false
    },
      include:{
          model:Type,
          as: "pokemonTypes",     
          attributes:["name"],
          through:{
              attributes:[]  
          }   
      }    
  })
      
  const infoApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=60`)).data
  const pokemonsApi = infoApi.results;    
  const infoPokemons = await Promise.all(
      pokemonsApi.map(async (pokemon) => {     
          const url = await axios.get(pokemon.url);
          return pokemonFormater(url.data)
      })
  )  
  return [...pokemonsDb, ...infoPokemons]; 
  //aquí se juntan en un solo array todos los pokemons tanto de la api como de la db, por eso utilizamos un spread operator.
};
const getPokemonById = async (req, res) => {
    const { id } = req.params;    //trae a pokemon por id

    try {
         const api = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        const pokemon = {
            id: api.data?.id, 
            name: api.data?.name, 
            hp: api.data.stats[0]?.base_stat, 
            attack:  api.data.stats[1]?.base_stat,
            defense: api.data.stats[2]?.base_stat,
            types: api.data.types?.map((t)=>t.type.name).join(" & "),  
            image: api.data.sprites?.front_default, 
        };
        res.status(200).json(pokemon)
        return pokemon
    } catch (error) {
        res.status(404).json(error)   
    }



};

const getPokemonByName = async (req, res) => {
    const { name } = req.query;
  try {
    const api = await axios(`https://pokeapi.co/api/v2/pokemon/${name}/`);

    if (api.data.name) {
        const pokemon = {
            id: api.data?.id, 
            name: api.data?.name, 
            hp: api.data.stats[0]?.base_stat, 
            attack:  api.data.stats[1]?.base_stat,
            defense: api.data.stats[2]?.base_stat,
            types: api.data.types?.map((t)=>t.type.name).join(" & "),
            image:element.sprites?.other.dream_world.front_default,
        };
        res.status(200).json(pokemon)
        return pokemon
    } else {
        const dbPokemon = await Pokemon.findOne({ where: { name: nameInLowerCase } });
        if (dbPokemon) {
            res.status(200).json(dbPokemon)
            return dbPokemon
        } else {
            res.status(404).json({ message: 'Pokemon not found' });
            return;
        }
    }
    } catch (error) {
    res.status(500).json({ message: 'An error occurred, please check your request and try again' });
  } 
}



module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,

}