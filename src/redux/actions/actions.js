export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_ALL_EPISODES = 'GET_ALL_EPISODES'

export function getAllCharacters(page) {
    console.log('llego')
 return function(dispatch){
     return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
     .then(r => r.json())
     .then(data => dispatch({type:GET_ALL_CHARACTERS, payload: data.results}))
 }
}

export function addFavorite(payload) {
return {
    type: ADD_FAVORITE,
    payload
}
}

export function removeFavorite (id) {
return {
    type: REMOVE_FAVORITE,
    payload: id
}
}

export function getAllEpisodes() {
    return function(dispatch) {
    return fetch('https://rickandmortyapi.com/api/episode')
    .then(r => r.json())
    .then(data => dispatch({type: GET_ALL_EPISODES, payload: data}))
    }
}