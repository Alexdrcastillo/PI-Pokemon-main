<<<<<<< HEAD
import { GET_ALL_POKE, GET_POKEMON, CLEAR_POKEMON, GET_NAME, CLEAR_SEARCH, GET_TYPES, FILTER_BY_TYPE, ORDER, DAMAGE } from "./actions";

const initialState = {
    pokemons: [],
    originalPokemons: [],
    pokemon:{},
    currentPoke:{},
    types:[]
  };
=======
import { GET_POKEMONS, GET_NAME, GET_POKEMON, GET_TYPES, FILTERED_ORDER } from './action-types';

const initialState = {
    pokemons: [],
    PokeName: [],
    pokemon : {},
    types: [],
    pokemonCopy: [],
    order: []

}
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26

  const rootReducer=(state = initialState, { type, payload })=>{
    switch(type){
        case GET_ALL_POKE:
            return {...state, pokemons: payload, originalPokemons: payload}

<<<<<<< HEAD
        case GET_POKEMON:
            return {
              ...state, 
             pokemon:{...state.pokemon, payload}
        }

        case CLEAR_POKEMON:
          return {...state, pokemon:{}}
        
        case GET_NAME:
          return{...state, currentPoke:payload}

        case CLEAR_SEARCH:
          return{...state, currentPoke:{}}

        case GET_TYPES:
          return {...state, types:payload}

        case FILTER_BY_TYPE:
          return{...state, pokemons:payload}

        case ORDER:
            var pokeOrder;
          payload === "asc"
            ? (pokeOrder = state.pokemons.sort((a, b) =>
                a.name.localeCompare(b.name)
              ))
            : (pokeOrder = state.pokemons.sort((a, b) =>
                b.name.localeCompare(a.name)
              ));
              return {
                ...state,
                pokemons: pokeOrder,
              };

              case DAMAGE:
                var orderDamage;
                if (payload === "all") {
                  orderDamage = state.pokemons;
                } 
                if (payload === "max") {
                  orderDamage = state.pokemons.sort((a, b) => b.attack - a.attack);
                } 
                 if (payload === "min") {
                  orderDamage = state.pokemons.sort((a, b) => a.attack - b.attack);
                }
                return {
                  ...state,
                  pokemons: orderDamage,
                };
=======
                case GET_POKEMON:
                    return {
                      ...state, 
                     pokemon:{...state.pokemon, payload}
                }
                   case GET_TYPES:
                    return {
                        ...state,
                        types: payload
                    }
                    case FILTERED_ORDER : 
                    const pokemonsOrdered = [...state.pokemons]
                    if(payload === 'Ascendant'){
                        pokemonsOrdered.sort((a,b)=> {      //A = Orden alfabetico de manera ascendete
                            if (a.name < b.name) {
                                return -1;
                              }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        }) 
                    }
                    if(payload === 'Descendent'){
                        pokemonsOrdered.sort((a,b)=> {
                            if (a.name > b.name) {
                                return -1;
                            }
                            if (a.name < b.name) {
                                return 1;
                            }
                            return 0;
                        })
                    }
                    return {
                        ...state,
                        order: pokemonsOrdered
                    }
>>>>>>> 3e5228f91feb5895c8658adc70c1be34f715bc26

        default:
            return {...state}
    }
  }

  export default rootReducer;