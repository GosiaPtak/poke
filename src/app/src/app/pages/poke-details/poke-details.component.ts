import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokeListService } from './../../services/poke-list.service';

@Component({
    selector: 'app-poke-details',
    templateUrl: './poke-details.component.html'
})
export class PokeDetailsComponent implements OnInit {
    private readonly detailsUrl = 'https://pokeapi.co/api/v2/pokemon/';
    public pokeId: string;
    public details: any;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private pokeListService: PokeListService
    ) { }

    async ngOnInit() {
        this.pokeId = this.activatedRoute.snapshot.params.id;
        const details = await this.pokeListService.getPokemonDetails(this.pokeId);
        this.details = details;
    }
}