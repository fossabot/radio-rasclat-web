import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CurrentTrackComponent } from './current-track/current-track.component';
import { RadioDataService } from './radiodata.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtmlPipe } from '@app/schedule/SafeHtmlPipe';

@NgModule({
  imports: [CommonModule, NgbDropdownModule],
  declarations: [LoaderComponent, CurrentTrackComponent, SafeHtmlPipe],
  exports: [LoaderComponent, CurrentTrackComponent, SafeHtmlPipe],
  providers: [RadioDataService]
})
export class SharedModule {}
