import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchPoke: FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchPoke = this.fb.group({ pokemon: [null, Validators.required] });
  }

  ngOnInit() {}
}
