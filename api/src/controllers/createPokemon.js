const { Pokemon, Type } = require("../db")
const axios = require("axios")

//  POST | /pokemons
// Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
const createPokemonDb = async (id, name, image, hp, attack, defense,type1,type2, ) => {
    const pokemon = await Pokemon.create({id, name, image, hp, attack, defense, createdByUser: true})
   
    const typePokemon1 = await Type.findOne({where:{name:type1}})
    console.log (type1,typePokemon1)
    await pokemon.addPokemonTypes(typePokemon1)

    if(type2){
        const typePokemon2 = await Type.findOne({where:{name:type2}})   
        console.log (typePokemon2)
        await pokemon.addPokemonTypes(typePokemon2) 
    }
    await pokemon.save()
    console.log (pokemon)

    return pokemon;

    // return await Pokemon.create({id, name, image, hp, attack, defense, speed, height, weight, types});
}

module.exports = { createPokemonDb }