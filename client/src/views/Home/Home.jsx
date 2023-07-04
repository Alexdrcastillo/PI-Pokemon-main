import { useEffect } from 'react'; //
import { useDispatch, useSelector } from 'react-redux'; //sirven para conectarnos con redux porque vienen de react
// import axios from 'axios';
import {getPokemons} from '../../redux/actions';
import Cards from '../../components/cards/cards';
import NavBar from '../../components/navBar/navBar';
import { useState } from 'react'
import SearchBar from '../../components/navBar/searchBar/searchBar'
import FiltroPorAtaque from '../filtros/FiltroPorAtaque';
import FiltroPorTypes from '../filtros/filtroPorType';
import Create from '../create/create';
import { Link, useNavigate } from 'react-router-dom';



function Home() {


  const navigate = useNavigate();
  const [showCards, setShowCards] = useState(true)
  const [currentPage, setCurrentPage] = useState(0); //estado local para ver en qué pagina estoy actualmente
  const pokemonsPerPage = 12; //esto muestra el inicio de los pokemons


  const dispatch = useDispatch(); //forma que le comunico a la store
  const allPokemons = useSelector((state) => state.pokemons);  //estamos creando un state y con useSelector se indica a qué estado(del reducer) está suscrito el componente 
  const pokeName = useSelector((state) => state)
  console.log(allPokemons)


  useEffect(() => { //en este caso se trae a los pokemons cuando la página se monta
    dispatch(getPokemons((currentPage) * pokemonsPerPage)) 
  }, [dispatch,currentPage]) //el array de dependencias es para ver en qué momento quiero que se ejecute la action, en este caso es cuando se monta 

  const handleShowCards = (show) => {
    setShowCards(show)
  }


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if(currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  const handleMyPokemons = () => {
    navigate('/my-pokemons');
  };

  return (
    <div>

     <div style={{ position: "fixed", bottom: "0", width: "100%", textAlign: "center" }}>
          <button onClick={() => previousPage()}>PREVIOUS</button>
         <button onClick={() => nextPage()}>NEXT</button>
     </div>
          
         <button onClick={handleMyPokemons}>Creados por mi</button>
 
         <Link to="/create">Crear Pokemon</Link>

          <SearchBar onShowCards={handleShowCards} />
          <FiltroPorAtaque onShowCards={handleShowCards}/> 
          <FiltroPorTypes onShowCards={handleShowCards} />
      {showCards && (
        <Cards allPokemons = {allPokemons}/>
      )}

    </div>
  );
}

export default Home;