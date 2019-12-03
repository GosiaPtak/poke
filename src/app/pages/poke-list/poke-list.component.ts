import { Component, OnInit } from '@angular/core';
import { PokeService } from './../../services/poke.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-poke-list',
	templateUrl: './poke-list.component.html',
	styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
	public limit: number;
	public offSet: number;
	public listOfPokemons: [];
	public onePoke: {};
	public numberOfResults: number;
	public params: {};
	public pokeId: number;
	public selectedPage: number;
	public slicer: {};

	constructor(private pokeService: PokeService, private router: Router) {
		this.limit = 10;
		this.offSet = 0;
		this.numberOfResults = 0;
		this.selectedPage = 0;
		this.slicer = { start: 0, end: 10 };
		this.params = { limit: 100, offset: 0 };
	}

	ngOnInit() {
		this.getListOfPokemons(this.params);
	}

	async getListOfPokemons(params: {}) {
		const listOfPokemons: any = await this.pokeService.getPokemons(params);
		this.numberOfResults = listOfPokemons.count;
		this.listOfPokemons = listOfPokemons.results.map(r => ({ ...r, id: r.url.split('/').slice(-2)[0] }));
	}

	goToDetails(pokemonId: number) {
		this.router.navigate(['/details', pokemonId]);
	}
	getSelectedPage(selectedPage: number) {
		this.selectedPage = selectedPage;
		this.slicer = { start: this.selectedPage * 10, end: (this.selectedPage + 1) * 10 };
	}
	findPokemon(id: number) {
		this.pokeId = id;
		this.slicer = { start: 0, end: 10 };
	}
}
