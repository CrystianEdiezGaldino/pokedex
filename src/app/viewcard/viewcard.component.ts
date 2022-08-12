import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.css']
})
export class ViewcardComponent implements OnInit {


  constructor(public pokedexservice: PokedexService) {

  }

  ngOnInit(): void {

  }

}
