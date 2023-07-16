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

export  async function Listpokemon (): Promise<ListPokemonInterFcae> {

    const endponit = `${process.env.REACT_APP_POKEAPI}` 

    const response = await axios.get<ListPokemonInterFcae>(endponit)
    
    return response.data
}

