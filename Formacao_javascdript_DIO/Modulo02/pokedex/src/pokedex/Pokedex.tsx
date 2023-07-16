import React, { useEffect, useState } from 'react'
import { Listpokemon,PokemonListeInterfeice} from '../pokemon/Serverse/Listpokemon';
import { getPokemonName } from '../pokemon/Serverse/GetPokemonName';
import { Welcome } from '../pokemon/interfaces/pokemonInterface';




interface PokedexProps {

}



export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setpokemon] = useState<PokemonListeInterfeice[]>([]);
    const [selectpokemon, setSelectedPokemon] = useState<PokemonListeInterfeice | undefined>(undefined);
    const [selectedPokemonDetail, setSelectePokemonDetal] = useState<Welcome | undefined>(undefined);

    useEffect(() => {
        Listpokemon().then((response) => setpokemon(response.results))
    }, []);

    useEffect(() => {
        if (!selectpokemon) return;

        getPokemonName(selectpokemon.name).then((response) => setSelectePokemonDetal(response))
    }, [selectpokemon])


    return (
        <div>
            <h1>Pokedex</h1>
            <p>Selected Pokemon: <br /> {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}</p>

            <p>
                Informações dos pokemones <br />
                <br />
                {JSON.stringify(selectedPokemonDetail, undefined, 2)}

            </p>
            {/* Display the details of the selected pokemon */}
        </div>
    )
}


// export default Pokedex;

