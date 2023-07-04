const { Pokemon } = require("../db")

const getMyPokemons = async (req, res) => {
  try {
    const myPokemons = await Pokemon.findAll({
        where: {
          createdByUser: true
        }
      });
    res.status(200).json(myPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMyPokemons };