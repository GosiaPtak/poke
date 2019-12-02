import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

@Output() setLimit: EventEmitter<number>  = new EventEmitter();
@Output() setOffset: EventEmitter<number>  = new EventEmitter();
@Input() numberOfResults: number;
@Input() resultsPerPage: number;
@Input() limitOfPages: number;

  constructor() {
  }

  ngOnInit() {
    console.log(this.numberOfResults, this.resultsPerPage, this.limitOfPages);
  }

}
