import { Component, OnInit, Output } from '@angular/core';
import { PokeListService } from './../../services/poke-list.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public limit: number;
  public offSet: number;
  public listOfPoke: any;
  public numberOfResults: number;

  constructor(
    private pokeListService: PokeListService,
    private router: Router
  ) {
    this.limit = 10;
    this.offSet = 0;
    this.numberOfResults = 0;
  }

  ngOnInit() {
    this.getListOfPokemons();
  }
  
  async getListOfPokemons() {
    const listOfPoke: any = await this.pokeListService.getPokemons(this.limit, this.offSet);
    this.numberOfResults = listOfPoke.count;
    this.listOfPoke = listOfPoke.results.map((r) => ({...r, id: r.url.split('/').slice(-2)[0]}));
  }

  goToDetails(pokemonId: string): void {
    this.router.navigate(['/details', pokemonId]);
  }
}
