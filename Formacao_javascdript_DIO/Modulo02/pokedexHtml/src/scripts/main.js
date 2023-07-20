


function ulpokemons(pokemon) {
    const text = String(`
    <li class="pokemon" id=${String(JSON.stringify(pokemon.type))}}">
        <span class="number">#00${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type  ${type}" id=${type}>${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"alt="${pokemon.name}">
        </div>
    </li>`)
    return text
}


var pokemonOl = window.document.querySelector("#pokemons")
pokeApi.getpokemons().then((listPokemon = []) => {
    const newList = listPokemon.map((pokemon) => {return ulpokemons(pokemon)})
    //! responsavio para adicionar os items no html
    pokemonOl.innerHTML = newList.join('')
})




//todo: o join ele sereve para concatenar strings por um separador.



//! nao precisamos abrir couchetes nesse caso.

//!outro jeito de adicionar os item no html o de cima e melhor
// var pokemonOl = document.querySelector("#pokemons")
// pokeApi.getpokemons().then((listPokemon = []) => {
//     var item = []
//     var cont = 1
//     for (let i = 0; i < listPokemon.length; i++) {
//         const pokemons = listPokemon[i]

//         item.push(ulpokemons(pokemons,cont))
//         cont++
//     }
//     pokemonOl.innerHTML += item
//     console.log(item)
// })