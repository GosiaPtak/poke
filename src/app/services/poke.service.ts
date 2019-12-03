import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PokeService {
	public readonly url = 'https://pokeapi.co/api/v2/pokemon/';
	constructor(private httpClient: HttpClient) {}

	async getPokemons(params) {
		return await this.httpClient.get(this.url, { params }).toPromise();
	}
	getPokemon(id) {
		return this.httpClient.get(`${this.url}${id}/`).toPromise();
	}
}
