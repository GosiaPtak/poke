import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	@Output() setSelectedPage: EventEmitter<{}> = new EventEmitter();

	@Input() numberOfResults: number;
	@Input() resultsPerPage: number;

	public limitOfPages: number;
	public pages: Array<number>;
	public currentPage: number;

	constructor() {
		this.currentPage = 0;
		this.limitOfPages = 10;
	}

	ngOnInit() {
		this.pages = Array.from({ length: Math.ceil(this.numberOfResults / this.resultsPerPage) }, (v, i) => i);
	}
	setCurrentPage(displayValue) {
		this.currentPage = displayValue;
		this.setSelectedPage.emit(this.currentPage);
	}
	setPage(action) {
		if (action === 'previous' && this.currentPage > 0) {
			this.currentPage = this.currentPage - 1;
			this.setCurrentPage(this.currentPage);
		} else if (action === 'next' && this.currentPage < 9) {
			this.currentPage = this.currentPage + 1;
			this.setCurrentPage(this.currentPage);
		}
	}
}
