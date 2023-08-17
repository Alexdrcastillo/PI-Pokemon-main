import { GET_POKEMONS, GET_NAME, GET_POKEMON, GET_TYPES, FILTERED_ORDER } from './action-types';

const initialState = {
    pokemons: [],
    PokeName: [],
    pokemon : {},
    types: [],
    pokemonCopy: [],
    order: []

}



const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            
            }
            case GET_NAME:
                return{...state, PokeName:payload}

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

        default:
            return {...state};
    }

}

export default rootReducer;