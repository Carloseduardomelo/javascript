let pokeApi = {}

pokeApi.getdetaisPokemon = (pokemon) =>{
    return fetch(pokemon.url).then((response) => response.json()).then(convertPokeApiDetailToPokemon)
}



function convertPokeApiDetailToPokemon(detaisPokemon) {
    const pokemon = new Pokemon()
    pokemon.number = detaisPokemon.order
    pokemon.name = detaisPokemon.name

    const types = detaisPokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = detaisPokemon.sprites.other.dream_world.front_default

    return pokemon
}


pokeApi.getpokemons = (offset=0,cont=10) => {
    //? sempre return para n da erro.c
    
    let url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${cont}`
    return fetch(url)
    .then((response) => response.json())//? retornando um promise em Json
    .then((response) => response.results)//? mostrando no console o resultado da promise.
    .then((pokemons) => pokemons.map((pokeApi.getdetaisPokemon)))
    .then((pokemonDEtais) => Promise.all(pokemonDEtais))
    .then((detaisPokemon) => detaisPokemon)

    console.log(pokemon.types)
    
}