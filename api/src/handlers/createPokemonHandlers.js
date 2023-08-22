const { createPokemonDb } = require("../controllers/createPokemon")


const createPokemonHandler = async (req, res) => {
    const { id, name, image, hp, attack, defense, type } = req.body;

    try {
      const response = await createPokemonDb(id, name, image, hp, attack, defense, type);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
module.exports = {
    createPokemonHandler
}
