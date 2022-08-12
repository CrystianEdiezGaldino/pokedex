import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemons = [];
  statusdate= [];

  

  constructor(private httpClient: HttpClient) { 
    this.loadlistpk();

  }
  async loadlistpk() {
    const pokedata =  this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100');
    const valuepokedata = await firstValueFrom(pokedata);
    
    this.pokemons = valuepokedata.results;
    console.log(this.pokemons);  
  }
  
  
}
