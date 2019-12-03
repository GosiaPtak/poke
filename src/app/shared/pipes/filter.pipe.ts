import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(allPokemons, id) {
		if (id) {
			return allPokemons.filter(poke => poke.id === id);
		}
		return allPokemons;
	}
}
