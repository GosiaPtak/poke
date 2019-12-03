import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PokeService } from './../../services/poke.service';
@Component({
	selector: 'app-poke-details',
	templateUrl: './poke-details.component.html',
	styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
	public pokeId: number;
	public pokeDetails: {};

	constructor(private activatedRoute: ActivatedRoute, private pokeService: PokeService, private router: Router) {}

	ngOnInit() {
		this.pokeId = Number(this.activatedRoute.snapshot.params.id);
		this.getPokeDetails(this.pokeId);
	}
	async getPokeDetails(id) {
		this.router.navigate(['/details', id]);
		const pokeDetails = await this.pokeService.getPokemon(id);
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
