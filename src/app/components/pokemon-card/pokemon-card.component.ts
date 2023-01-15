
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PokemonDetails, PokeAPI, Results } from 'src/app/shared/interface';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() public pokemonsList!:PokemonDetails;

  @Output()
  sendPokemons: EventEmitter<PokemonDetails> = new EventEmitter<PokemonDetails>()
    
  constructor(){ }

  ngOnInit(): void {
      
  }
  
  public selectPokemons(pokemonsList:PokemonDetails):void {
     this.sendPokemons.emit(pokemonsList)
     
   }


}
