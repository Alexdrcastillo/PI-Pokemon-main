import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterOrder, getPokemons } from '../../redux/actions'; 

const FiltroOrder = ({ onOrderChange, onShowCards }) => {
    
    const pokemons = useSelector(state => state.order);

    console.log(pokemons, "desde filtro")

    const dispatch = useDispatch();
  


    const handlerOrder = (value) => {
      dispatch(filterOrder(value));
      onOrderChange(value);
      onShowCards(false)
    };
   
  
    return (
      <div>
        <section>
          <label htmlFor="order">Orden:</label>
          <select id="order" onChange={(e) => handlerOrder(e.target.value)}>
            <option value="Ascendant">Ascendente</option>
            <option value="Descendent">Descendente</option>
          </select>
        </section>

<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {
            pokemons.map(pokemon => {
                return(
                    <div key={pokemon.id} style={{height: "100%", width: "150px", backgroundColor: "#D3D3D3", margin: "20px", borderRadius: "10px", textAlign: "center"}}>
                        <h1>{pokemon.name}</h1>
                        <img style={{height: "100px", width: "100px"}} src={pokemon.image} />
                        <h1>{pokemon.types}</h1>
                    </div>
                )
            })
        }
</div>

      </div>
    );
  };
 
export default FiltroOrder;