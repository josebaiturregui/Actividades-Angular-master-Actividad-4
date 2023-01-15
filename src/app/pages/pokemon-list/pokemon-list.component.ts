import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeAPI, Results, PokemonDetails  } from 'src/app/shared/interface';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonsList:PokemonDetails[] = [];
 
  public pokemons!:PokeAPI;
  
  public selectPokemon!: PokemonDetails;
  
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    
    this.getPokemons();

  }

  getPokemons():void{
    this.pokemonService.getPokemon()
      .subscribe((data:PokeAPI)=> {
        this.pokemons = data;
        
      
        this.pokemons.results.forEach( pokemon => {
        pokemon.id = pokemon.url.split('/')[
          pokemon.url.split('/').length -2
        ];
        this.getPokemonDetails(pokemon);
      });
    });
  }

  getPokemonDetails(pokemon:Results):void{
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details:PokemonDetails) => {
        pokemon.details = details;
        this.pokemonsList.push(details);
        
        
        
      });
      console.log(this.pokemonsList);
  }

  public receivePokemons(pokemonsList: PokemonDetails):void{
    this.selectPokemon = pokemonsList;
    
  }
   
        
}
 



