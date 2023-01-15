   
  export interface PokeAPI {
    count: number;
    next: string;
    results: Results[];
  }
  export interface Results {
    name: string;
    url: string;
    id?: string;
    details?: PokemonDetails;
    description?: string;
  }
  
  export interface PokemonDetails {
    name: string;
    id: number;
    sprites: Sprites;
    
    types?: Array<any>;
    description?:string
  }
  export interface Sprites {
    front_default:string;
  }