var pokemonOl = window.document.querySelector("#pokemons")
const buton = document.querySelector(".butao")

let cont = 10
let offset = 0
let limite = 90


function ulpokemons(pokemon ) {
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
function loadPoke(offset,cont,cont2) {
    pokeApi.getpokemons(offset,cont).then((listPokemon = []) => {
        const newList = listPokemon.map((pokemon) => { return ulpokemons(pokemon) })
        //! responsavio para adicionar os items no html
        pokemonOl.innerHTML += newList.join('')
    })
}

loadPoke(offset, cont)

buton.addEventListener('click', () =>{
    offset += cont 
    loadPoke(offset , cont)

    if (offset >= limite){
        buton.style.display = 'none'
    }else{
        console.log('ok')
    }
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