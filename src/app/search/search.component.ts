import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'ZWO16LPKPA',
  '67e184cae67ef2d22f83a45059f7956e'
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  version: string = environment.version;

  config = {
    indexName: 'archive',
    routing: true,
    searchClient
  };

  constructor() {}

  ngOnInit() {}
}
