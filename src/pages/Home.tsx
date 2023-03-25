import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { IndexPokemon, IndexType } from "../components/Interface.ts/interface";
import { PokemonLists } from "../components/PokemonList"
import  usePokemons  from "../hooks/usePokemons"


const Home = () => {
  const { pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, selectType, setSelectType, setpokemons} = usePokemons();

  const handelClickType = (type: IndexType | null) => {
    if (type) {
      setSelectType(type)
    }else {
      setpokemons([]);
      setSelectType(null);
    }
  }

  return  (
    <Container maxWidth= "sm"  >
      <Grid 
            container 
            spacing={2} 
            mt={1}>
        <Grid 
              container
              item 
              xs={12} 
              sx={{ 
              display: "flex", 
              justifyContent: "center"}}>

          {pokemonTypes.map((type) => {
            return(
              <Button
              variant="contained"
              sx={{ 
                  backgroundColor:type.color,
                  m: 1,
                
              }}
              onClick={() => handelClickType(type)}
              >{type.name}</Button>
            )
          })}
          <Button 
                  variant="contained"
                  sx={{
                    m: 1,
                  }} 
                  onClick={() => handelClickType(null)}>All</Button>
        </Grid>

        <Grid container item
              xs={12} sx={{ 
                display: "flex", 
                justifyContent: "center"}}>

          <PokemonLists pokemons={pokemons}/>
            {hasMorePokemon ? (
            <Button sx={{ 
              mt:2, 
              mx:"auto", 
              display:"block",  
              margin:"0 2"}} 
              variant="contained" 
              onClick={fetchNextPage} 
              color="warning" >
              Click for more Pokemons</Button>
          ) : null}

        </Grid>
      </Grid>
    </Container>
  )
  
}

export default Home