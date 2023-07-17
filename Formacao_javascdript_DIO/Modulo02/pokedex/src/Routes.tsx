import React from 'react';
import { BrowserRouter, Route} from "react-router-dom"
import { Pokedex } from './pokedex/Pokedex';
import PokemonDetais from './pokemon/PokemonDeatis';

interface RoutesProps {

}

const Routas: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <Route path="/" >
                <Pokedex />
            </Route>
            <Route path="/pokemon">
                <PokemonDetais />
            </Route>
        </BrowserRouter>
    );
}



export default Routas;