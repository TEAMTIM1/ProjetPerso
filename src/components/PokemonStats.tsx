import { Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { DetailPokemon } from "./Interface.ts/interface"

interface PokemonStatsProps {
    pokemon: DetailPokemon;
};


const PokemonStats = ({pokemon}:PokemonStatsProps) => {

  return (
    <Card style={{backgroundColor: "navajowhite"}}>
        <CardContent>
            <Grid  
                container
                justifyContent={"center"}
                spacing={4}
                >
                <Grid item>
                    <Table size="medium">
                        <TableHead>
                            <TableRow>
                                {pokemon.stats.map((stat) => {
                                    return (
                                        <TableCell sx={{textTransform: "capitalize"}}>{stat.stat.name}</TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {pokemon.stats.map((stat) => {
                                    return (
                                        <TableCell>{stat.base_stat}</TableCell>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default PokemonStats