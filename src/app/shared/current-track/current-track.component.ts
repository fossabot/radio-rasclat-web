import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { RadioDataService } from './../radiodata.service';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  currentTrack = '';
  isLoading = false;

  constructor(private radioDataService: RadioDataService) {}

  ngOnInit() {
    this.isLoading = true;
    this.radioDataService
      .getCurrentTrack()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(currentTrack => {
        console.log(currentTrack);
        this.currentTrack = currentTrack;
      });
  }
}
