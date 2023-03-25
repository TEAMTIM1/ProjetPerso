import { Grid } from "@mui/material";
import React from "react";
import { IndexPokemon, PokemonList } from "./Interface.ts/interface"
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
    pokemons: PokemonList[];
    
}

export const PokemonLists = ({pokemons}: PokemonListProps ) => {
  return (
    < Grid container spacing={2}> 
    {pokemons.length > 0 ? pokemons.map((p) => {
        return (
            <Grid item xs={4}>
                <PokemonCard key={p.name} pokemon={p}/>
            </Grid>
        )
    }) 
    : null}
    </Grid>
  );
};
