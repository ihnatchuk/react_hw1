export const characterService=()=>{
    return fetch('https://rickandmortyapi.com/api/character').then(value => value.json())
}