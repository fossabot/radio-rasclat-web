import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CurrentTrackComponent } from './current-track/current-track.component';

import { RadioDataService } from './radiodata.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbDropdownModule],
  declarations: [LoaderComponent, CurrentTrackComponent],
  exports: [LoaderComponent, CurrentTrackComponent],
  providers: [RadioDataService]
})
export class SharedModule {}
