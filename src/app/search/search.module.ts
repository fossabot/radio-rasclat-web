import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  imports: [CommonModule, TranslateModule, SearchRoutingModule, NgAisModule],
  declarations: [SearchComponent]
})
export class SearchModule {}
