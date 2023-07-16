let poke = fetch("https://pokeapi.co/api/v2/berry/1/")
.then(response => response.json()
.then(json => console.log(json)))


let response = poke['nome']


console.log(response)