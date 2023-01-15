import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { PokeAPI, Results, PokemonDetails  } from '../shared/interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokeAPI:any;
  public error:string='';

  constructor(
    private http: HttpClient
  ) {
    this.pokeAPI = environment.pokemonURL;
   }

  //voy a limitar el número de Pokemons a 20
   public getPokemon(): Observable<PokeAPI>{
    return this.http
    .get<PokeAPI>(`${this.pokeAPI}?limit=20`)
    
   }
   //esta direccion nos dará los detalles de los pokemons
   getPokemonDetails(name:string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
      
  }

 
  

}
