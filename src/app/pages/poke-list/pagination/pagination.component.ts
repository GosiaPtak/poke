import { Component, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  length = 100;
  pageSize = 10;

  pageEvent: PageEvent;

  constructor() {}

  ngOnInit() {}
}
