import { useEffect, useState } from "react"
import { clienthttp } from "../api/clienthttp"
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL, POKEMON_TYPES } from "../constante";
import { IndexPokemon, PokemonByTypeResponse, PokemonList, PokemonListResponse,  } from "../components/Interface.ts/interface"

const usePokemons = () => {

    const [pokemons, setpokemons] = useState<PokemonList[]>([]);

    const [nextUrl, setNexUrl] = useState<string | null>
    (POKEMON_API_POKEMON_URL);

    const  [ selectType, setSelectType] =useState<IndexPokemon | null>(null);


    useEffect(()=> {
        if (selectType) {
            fetchPokemonType()
        }else {
            fetchPokemon()
        }
        
    },[selectType]);




    const pokemonIndexListPokemon = ( indexPokemon: IndexPokemon) => {
        const pokedexNumber = parseInt(indexPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const listPokemon: PokemonList = {
            name: indexPokemon.name,
            url: indexPokemon.url,
            image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber
        }
        return listPokemon
    };

    const fetchPokemonType =async () => {
        if (selectType) {
            const result = await clienthttp.get<PokemonByTypeResponse>(selectType.url);
            if (result?.data?.pokemon) {
                const pokemonTypeList = result.data.pokemon.map((p) => pokemonIndexListPokemon(p.pokemon));

                setpokemons(pokemonTypeList);
                setNexUrl(POKEMON_API_POKEMON_URL)
              
            }
        }
    }

    const fetchPokemon =async () => {
        if (nextUrl) {
            const result = await clienthttp.get<PokemonListResponse>(nextUrl)
            if (result?.data?.results) {
                const listPokemon = result.data.results.map((p) => pokemonIndexListPokemon(p))
                setpokemons([...pokemons, ...listPokemon])
                setNexUrl(result.data.next)
            }
            
        }
    }
  return {
    pokemons, 
    fetchNextPage: fetchPokemon,
    hasMorePokemon: !!nextUrl,
    pokemonTypes: POKEMON_TYPES,
    selectType,
    setSelectType,
    setpokemons,
}
}

export default usePokemons;
