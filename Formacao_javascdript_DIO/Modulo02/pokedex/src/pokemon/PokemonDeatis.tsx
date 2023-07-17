import { useEffect, useState } from "react";
import { Welcome } from "./interfaces/pokemonInterface";
import { getPokemonName } from "./Serverse/GetPokemonName";

interface PokemonDetaisProps {

}


const PokemonDetais: React.FC<PokemonDetaisProps> = () => {

    const [selectedPokemonDetail, setSelectePokemonDetal] = useState<Welcome | undefined>(undefined);

    // useEffect(() => {
    //     if (!selectpokemon) return;

    //     getPokemonName(selectpokemon.name).then((response) => setSelectePokemonDetal(response))
    // }, [selectpokemon])

    return (
        <div>
            <p>
                Informações dos pokemones <br />
                <br />
                {JSON.stringify(selectedPokemonDetail, undefined, 2)}

            </p>
            {/* Display the details of the selected pokemon */}
        </div>
    );
}



export default PokemonDetais;