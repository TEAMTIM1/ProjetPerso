import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DetailPokemon } from "./Interface.ts/interface"

interface pokemonBasicInfoProps {
    pokemon: DetailPokemon;
}


const PokemonBasicInfo = ({pokemon}: pokemonBasicInfoProps) => {

  return (
    <Card style={{ backgroundColor: "gainsboro"}}>
        <CardContent>
            <Grid   container
                    sx={{textTransform: "capitalize"}}
                    justifyContent="center"
                    textAlign="center" 
                    spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Height</Typography>
                            <Typography variant="body2">{pokemon.height}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Weigth</Typography>
                            <Typography variant="body2">{pokemon.weight}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Ability</Typography>
                            <Typography variant="body2">{pokemon.abilities.map((ability) => {
                                return (
                                        <Typography>{ability.ability.name}</Typography>
                                )
                            })}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Types</Typography>
                            <Typography variant="body2">{pokemon.types.map((type) => {
                                return (
                                        <Typography>{type.type.name}</Typography>
                                )
                            })}</Typography>
                        </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default PokemonBasicInfo