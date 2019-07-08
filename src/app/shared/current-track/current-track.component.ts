import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';

import { CurrentTrackService } from './currentTrack.service';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  currentTrack: any;
  currentTrackID: any;
  currentArtist: any;
  isLoading = false;
  value: string;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private currentTrackService: CurrentTrackService) {}

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
    this.currentTrackService.getMessage().subscribe((currentTrack: any) => {
      this.currentTrackID = currentTrack.track_title;
      this.currentArtist = currentTrack.artist_name;
      console.log('Incoming msg', currentTrack);
      this.isLoading = false;
    });
    // this.radioDataService
    //   .getCurrentTrack()
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe(currentTrack => {
    //     console.log(currentTrack);
    //     this.currentTrack = currentTrack;
    //   });
  }
}
