const { getAllPokemons } = require("../controllers/pokemonController");

const MAX_ATTEMPTS = 1; // Número máximo de intentos
const DELAY = 100; // Tiempo de espera entre intentos en milisegundos

const getAllHandler = async (req, res) => {
  try {
    const { offset, createdByUsr } = req.query;
    let attempts = 0;
    let success = false;
    let getPokemons;

    while (attempts < MAX_ATTEMPTS && !success) {
      try {
        getPokemons = await getAllPokemons(offset, createdByUsr);
        console.log(getPokemons)
        success = true;
      } catch (error) {
        console.log(`Error al intentar obtener los pokemones: ${error}`);
        attempts++;
        if (attempts < MAX_ATTEMPTS) {
          console.log(`Reintentando en ${DELAY} milisegundos...`);
          await new Promise((resolve) => setTimeout(resolve, DELAY));
        }
      }
    }

    if (success) {
      res.status(200).json(getPokemons);
    } else {
      res.status(500).json({ message: "No se pudieron obtener los pokemones después de varios intentos" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllHandler };
