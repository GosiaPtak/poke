import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
public readonly url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient) { }

  async getPokemons(limit, offSet) {
    const params = {limit, offSet};
    return await this.httpClient.get(this.url, { params }).toPromise();
  }
  async getPokemonDetails(id) {
    await this.httpClient.get(`${this.url}${id}/`).toPromise();
  }
}
