//! arquivo de izibeção os pokemon.

import React, { useEffect, useState } from 'react'
import { Listpokemon, PokemonListeInterfeice } from '../pokemon/Serverse/Listpokemon';
import { getPokemonName } from '../pokemon/Serverse/GetPokemonName';
import { Welcome } from '../pokemon/interfaces/pokemonInterface';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

interface PokedexProps {

}



export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setpokemon] = useState<PokemonListeInterfeice[]>([]);
    const [selectpokemon, setSelectedPokemon] = useState<PokemonListeInterfeice | undefined>(undefined);
    const [selectedPokemonDetail, setSelectePokemonDetal] = useState<Welcome | undefined>(undefined);
    const [contPokemon, setContPokemon] = useState(12)


    function cont(contPokemon: any) {
        setContPokemon(contPokemon += 12)
    }


    useEffect(() => {
        Listpokemon(contPokemon).then((response) => setpokemon(response.results))
    }, [contPokemon]);

    useEffect(() => {
        if (!selectpokemon) return;

        getPokemonName(selectpokemon.name).then((response) => setSelectePokemonDetal(response))
    }, [selectpokemon])



    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pokedex
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth='sm'>
                <Box mt={2}>
                    <Grid container spacing={2}>
                        {pokemons.map((pokemon) => (
                            <>
                                <Grid item xs={6} lg={3} spacing={10}>
                                    <Card sx={{ minWidth: 130 }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div" fontSize={20}>
                                                {pokemon.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => setSelectedPokemon(pokemon)}>Abrir</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                        ))}
                    </Grid >

                    <Button variant="contained" color="success" onClick={() => {
                        cont(contPokemon)
                    }}>
                        Success
                    </Button>

                </Box>
            </Container>
        </div >
    )
}


// export default Pokedex;

