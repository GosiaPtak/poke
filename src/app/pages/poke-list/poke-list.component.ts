import { Component, OnInit, Output } from '@angular/core';
import { PokeListService } from './../../services/poke-list.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-poke-list',
	templateUrl: './poke-list.component.html',
	styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
	public limit: number;
	public offSet: number;
	public listOfPoke: [];
	public numberOfResults: number;
	public params: {};

	constructor(private pokeListService: PokeListService, private router: Router) {
		this.limit = 10;
		this.offSet = 0;
		this.numberOfResults = 0;
		this.params = { limit: 10, offset: 0 };
	}

	ngOnInit() {
		this.getListOfPokemons(this.params);
	}

	async getListOfPokemons(params) {
		const listOfPoke: any = await this.pokeListService.getPokemons(params);
		this.numberOfResults = listOfPoke.count;
		this.listOfPoke = listOfPoke.results.map(r => ({ ...r, id: r.url.split('/').slice(-2)[0] }));
	}

	goToDetails(pokemonId: string): void {
		this.router.navigate(['/details', pokemonId]);
	}
	getParams(event) {
		this.params = event;
		this.getListOfPokemons(this.params);
	}
}
