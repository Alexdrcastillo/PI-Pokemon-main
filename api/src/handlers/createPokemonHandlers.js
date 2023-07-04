const { createPokemonDb } = require("../controllers/createPokemon")


const createPokemonHandler = async (req, res) => {
    const { id, name, image, hp, attack, defense,type1,type2} = req.body; //llega info por body y la recibe el handler, la extrae del body

    try { //sirve para manejar errores
        const response = await createPokemonDb(id, name, image, hp, attack, defense,type1,type2);//invocaba a nuestro controller y le pasamos la info
        res.status(200).json(response); 
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createPokemonHandler
}