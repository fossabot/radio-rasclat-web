import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  version: string = environment.version;

  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };

  constructor() {}

  ngOnInit() {}
}
