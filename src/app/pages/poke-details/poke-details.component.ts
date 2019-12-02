import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PokeListService } from './../../services/poke-list.service';
@Component({
	selector: 'app-poke-details',
	templateUrl: './poke-details.component.html',
	styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
	private readonly detailsUrl = 'https://pokeapi.co/api/v2/pokemon/';
	public pokeId: number;
	public pokeDetails: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private pokeListService: PokeListService,
		private router: Router
	) {}

	ngOnInit() {
		this.pokeId = Number(this.activatedRoute.snapshot.params.id);
		this.getPokeDetails(this.pokeId);
	}
	async getPokeDetails(id) {
		this.router.navigate(['/details', id]);
		const pokeDetails = await this.pokeListService.getPokemon(id);
		this.pokeDetails = pokeDetails;
	}
	choosePokemon(action) {
		if (action === 'previous' && this.pokeId > 1) {
			this.pokeId = this.pokeId - 1;
			this.getPokeDetails(this.pokeId);
		} else if (action === 'next') {
			this.pokeId = this.pokeId + 1;
			this.getPokeDetails(this.pokeId);
		}
	}
}
