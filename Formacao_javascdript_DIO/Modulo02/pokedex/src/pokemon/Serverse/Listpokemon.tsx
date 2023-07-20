//! arquivo para pegar a lista depokemon.

import axios from 'axios';


export interface PokemonListeInterfeice {
    name: string;
    url: string;
}

interface ListPokemonInterFcae{
    count: number;
    next: null | string;
    previous: null | string;
    results:PokemonListeInterfeice[]
}

export  async function Listpokemon (cont:Number): Promise<ListPokemonInterFcae> {

    const endponit = `${process.env.REACT_APP_POKEAPI}?offset=20&limit=${cont}` 

    const response = await axios.get<ListPokemonInterFcae>(endponit)
    
    return response.data
}

