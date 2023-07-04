import { useDispatch, useSelector } from 'react-redux'; //sirven para conectarnos con redux porque vienen de react
import styles from "./detail.module.css"
import { Link } from 'react-router-dom';

const Detail = ({ name }) => {

    const pokemon = useSelector((state) => state.PokeName);  //estamos creando un state y con useSelector se indica a qué estado(del reducer) está suscrito el componente 

   const poke = [pokemon]
   

  return (
    <div>
    
     <Link to="/home">Home</Link>

      {
      poke.map(pok => {
        return (
            <div className={styles}>
                <h1>{pok.name}</h1>
                <img  style={{height: "200px", width: "200px"}} src={pok.image} />
                <h1>{pok.types}</h1>
            </div>
        )
      })
      }
    </div>
  )
}

export default Detail