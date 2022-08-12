import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-cardprofile',
  templateUrl: './cardprofile.component.html',
  styleUrls: ['./cardprofile.component.css']
})
export class CardprofileComponent implements OnInit {
  @Input() 
  pokemonName!: string;
  @Input()
  id!: number;
  


  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.id);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
  constructor(public pokedexservice: PokedexService) {

  }


  ngOnInit(): void {
  }

}
