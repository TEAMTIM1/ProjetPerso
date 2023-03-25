import { Button, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link, useParams } from 'react-router-dom'
import useSinglePokemon from '../hooks/useSinglePokemon';
import PokemonAvatar from './PokemonAvatar';
import PokemonBasicInfo from './PokemonBasicInfo';
import PokemonStats from './PokemonStats';

const PokemonDetails = () => {
    const { pokemonName } = useParams();
    const { pokemon, isLoading } = useSinglePokemon({pokemonName})
  return (
    <Container>
        <Grid container flexDirection={"column"} alignItems="center" justifyContent={"center"} spacing={6} mt={1}>
            <Grid item container alignItems="center" justifyContent="center" spacing={6}>
                {isLoading ? (
                    <Box> loading...please wait </Box>
                ): pokemon ? (
                    <>
                        <Grid item xs={12} sm={10}>
                            <PokemonAvatar pokemon={pokemon}/>
                        </Grid>
                        <Grid item xs={12} sm={10} >
                            <PokemonBasicInfo pokemon={pokemon}/>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <PokemonStats pokemon={pokemon}/>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to={"/"} variant= "contained" color='warning'>Return to Pokemon List</Button>
                        </Grid>
                    
                    </>
                ): (
                    <Box> Pokemon not found</Box>
                )}
            </Grid>
        </Grid>
    </Container>
  )
}

export default PokemonDetails