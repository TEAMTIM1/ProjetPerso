
export interface IndexPokemon {
  name: string;
  url: string;
};

export interface PokemonListResponse {

  count : number;
  next: string;
  previous: string;
  results: IndexPokemon[];
  
};

 export interface PokemonList {

    /* id: number */
    name: string;
    image:string;
    url:string;
    pokedexNumber:number;
   /*  sprites: {
      front_default : string
    }
    types: {
      type: {
        name: string
      }
    }[]
   */ 
 };

 export interface PokemonAbility {
  ability : {
    name: string;
    url: string;
  },
  us_hidden: boolean;
  slot: number; 
 }

 export interface PokemonType {
  slot:number;
  type: {
    name: string;
    url: string;
  },
  
 }

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  },
 
}

 export interface DetailPokemon {
  id: number;
  name: string;
  stats: PokemonStats[]
  types : PokemonType[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  sprites: {
    other: {
      "official-artwork": {
        front_default:string;
      };
    };
  };
  color: string | null;
 }

 export interface IndexType {
  name: string;
  url: string;
  color: string;
 };

 export interface indexPokemonByType {
  pokemon: IndexPokemon;
  slot: number;
 };

 export interface PokemonByTypeResponse {
  id: number;
  pokemon: indexPokemonByType[];
 }