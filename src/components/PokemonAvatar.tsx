import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import getColorFromUrl from "../utils/colors"
import { DetailPokemon } from "./Interface.ts/interface"

interface AvatarProps {
    pokemon: DetailPokemon
};


const PokemonAvatar = ({ pokemon }: AvatarProps) => {
    const [pokemonColor, setPokemonColor] = useState<string | null>(null)

   

  return (
    <Card sx={{backgroundColor: pokemon.color}}>
        <CardMedia  component="img"
                        sx={{height: 100, objectFit: "contain"}}
                        image={pokemon.sprites.other["official-artwork"].front_default}
                        title={pokemon.name}/>
        <CardContent>
            <Box sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography sx={{textTransform: "capitalize" }}>{pokemon.name}</Typography>
                <Typography sx={{textTransform: "capitalize"}}>#{pokemon.id}</Typography>
            </Box>

            
        </CardContent>
    </Card>
  )
}

export default PokemonAvatar