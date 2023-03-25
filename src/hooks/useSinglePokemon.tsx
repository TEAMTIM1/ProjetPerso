import { useEffect, useState } from "react";
import { clienthttp } from "../api/clienthttp";
import { DetailPokemon } from "../components/Interface.ts/interface";
import { POKEMON_API_POKEMON_URL } from "../constante";
import getColorFromUrl from "../utils/colors";

interface useSinglePokemonProps {
    pokemonName: string | undefined;
};



const useSinglePokemon = ({pokemonName}: useSinglePokemonProps) => {
    const [ pokemon, setpokemon] = useState< DetailPokemon | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  

    

    useEffect(() => {
        if (pokemonName) {
            fetchPokemon();
        }
    }, [pokemonName]);


    useEffect(() => {
        if (pokemon) {
             getPokemonColor()
        }
       
    }, [pokemon]);

    const getPokemonColor = async () => {
        if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
            const color = await getColorFromUrl(pokemon.sprites.other["official-artwork"].front_default)
            if (color) {
                setpokemon({...pokemon, color})
            }
        }
    }
    

    const fetchPokemon = async () => {
        if (pokemonName) {
            setIsLoading(true);
            const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
            const result = await clienthttp.get<DetailPokemon>(url);
            if (result?.data) {
                setpokemon(result.data)
            }
        }setIsLoading(false)
    }

  return (
    {pokemon, isLoading}
  )
}

export default useSinglePokemon