import { GET_POKEMONS, GET_NAME, GET_POKEMON } from './action-types';

const initialState = {
    pokemons: [],
    PokeName: [],
    pokemon : {}
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
        

        default:
            return {...state};
    }

}

export default rootReducer;