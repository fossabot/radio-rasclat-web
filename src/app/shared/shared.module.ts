import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CurrentTrackComponent } from './current-track/current-track.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, CurrentTrackComponent],
  exports: [LoaderComponent, CurrentTrackComponent]
})
export class SharedModule {}
