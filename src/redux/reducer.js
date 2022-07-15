import { GET_ALL_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE, GET_ALL_EPISODES } from "./actions/actions";

const initialState = {
    characters: [],
    favorites: [],
    episodes: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload

            }
        
        case ADD_FAVORITE: 
        return { 
            ...state, 
            favorites: [...state.favorites, action.payload]

        }

        case REMOVE_FAVORITE:
            return {
                ...state, 
                favorites: state.favorites.filter((el) => el.id !== action.payload)

            }
        case GET_ALL_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }

       default:
           return {
               ...state
           }
    }
}