const { Router } = require('express');
const  { getAllPokemons, getPokemonById, getPokemonByName, createPokemon } = require("../controllers/pokemonController");
const { Pokemon, Type } = require("../db");
const getAllTypes = require('../controllers/typeControllers');
const { createPokemonHandler } = require('../handlers/createPokemonHandlers');
const { getAllHandler } = require('../handlers/getAllPokemonHandler');
const { getMyPokemons } = require('../controllers/getMyPokemons');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemons", getAllHandler)
router.use("/pokemon/:id", getPokemonById)
router.use("/pokemon", getPokemonByName)
router.use("/types", getAllTypes);
router.post('/create', createPokemonHandler);
router.use("/getmypokemons", getMyPokemons )
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
