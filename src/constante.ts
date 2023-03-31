import { blue, blueGrey, brown, green, lightBlue, lime, pink, red, yellow } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";
import { color } from "@mui/system";
import { IndexType } from "./components/Interface.ts/interface";

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2";
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`;
export const POKEMON_IMAGES_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const POKEMON_TYPES: IndexType[] = [
    {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
        color: brown[100],
        },
        {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
        color: red[300],
        },
        {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
        color: yellow[600],
        },
        {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
        color: blueGrey[500],
        },
        {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
        color: brown[200],
        },
        {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
        color: brown[400],
        },
        {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
        color: green[200],
        },
        {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/",
        color: lime[600],
        },
        {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
        color: brown[900],
        },
        {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
        color: red[900],
        },
        {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
        color: blue[900],
        },
        {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
        color: green[500],
        },
        {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
        color: yellow[600],
        },
        {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/",
        color: yellow[900],
        },
        {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/",
        color: blue[600],
        },
        {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/",
        color: green[900],
        },
        {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/",
        color: brown[900],
        },
        {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
        color: pink[600],
        },
] 

