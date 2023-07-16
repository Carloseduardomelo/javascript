import axios from 'axios';
import { Welcome } from '../interfaces/pokemonInterface';

export  async function getPokemonName (name:string): Promise<Welcome> {

    const API = process.env.REACT_APP_POKEAPI

    const endponit = `${API}${name}`

    const response = await axios.get<Welcome>(endponit)
    
    return response.data
}
