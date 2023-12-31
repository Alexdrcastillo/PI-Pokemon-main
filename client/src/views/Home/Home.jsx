import React, {useEffect, useState} from 'react'
import styles from "./Home.module.css"
import Filters from '../../Components/Filters/Filters'
import { getAllPokemon } from '../../Redux/actions'
import { useDispatch, useSelector } from "react-redux";
import load from '../../images/poke_load.gif'
import icon from '../../images/linkedin.png'
import Paginado from '../../Components/Paginado/Paginado'
import Cards from '../../Components/Cards/Cards';

const Home = () => {
  const dispatch=useDispatch()
  const allPoke=useSelector((state)=>state)
  const pokeName=useSelector((state)=>state.currentPoke)
  const [page, setPage]=useState(1)  
  //cant de paginas a mostrar
  const [perPage] = useState(12);
  
  // Calcula los índices del primer y último pokemon a mostrar
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Calcula el número máximo de paginas
  const max = Math.ceil(allPoke.pokemons?.length / perPage);

  // Obtiene el array de pokemons a mostrar en la pagina actual
  const pokemonsToShow = allPoke.pokemons?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);
console.log("ESTO ES POKENAME",pokeName)

  return (
    <div className={styles.main}>
        <div className={styles.title}>
         </div>
        <div className={styles.filter}>
            <Filters/>
        </div>
        <main className={styles.container}>
          <section className={styles.pokemonContainer}>
            {/* Si el estado de la aplicación indica una búsqueda específica de un Pokémon, se mostrará solo ese Pokemon; si el estado indica que se debe mostrar una lista de Pokemones, se mostrará esa lista; y si la aplicación aún no ha cargado los datos, se mostrará una imagen de carga. */}
          {pokemonsToShow?.length ? (
            pokemonsToShow?.map((pokemon, index) => (
              <Cards
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                id={pokemon.id}
                types={pokemon.types}
              />
            ))
          ) : (
            <img className={styles.load} src={load} alt="something" />
          )}
          </section>
        </main>

      <div className={styles.pag}>
        <Paginado page={page} setPage={setPage} max={max} />
      </div>

     
    </div>
  )
}

export default Home