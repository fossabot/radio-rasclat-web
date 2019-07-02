import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { RadioDataService } from './../radiodata.service';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  currentTrack: any;
  isLoading = false;
  value: string;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private radioDataService: RadioDataService) {}

  onAudioPlay() {
    if (this.audioPlayerRef.nativeElement.paused) {
      this.audioPlayerRef.nativeElement.play();
      this.value = '❙❙';
    } else {
      this.audioPlayerRef.nativeElement.pause();
      this.value = '►';
    }
  }

  ngOnInit() {
    this.isLoading = true;
    this.value = '►';
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
