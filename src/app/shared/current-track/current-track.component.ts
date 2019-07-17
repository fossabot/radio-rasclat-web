import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';

import { RadioDataService } from '@app/shared/radiodata.service';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  current: any;
  isLoading = false;
  value: string;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private radioDataService: RadioDataService) {}

  onAudioPlay() {
    if (this.audioPlayerRef.nativeElement.paused) {
      this.audioPlayerRef.nativeElement.play();
      this.value = 'Pause';
    } else {
      this.audioPlayerRef.nativeElement.pause();
      this.value = 'Play';
    }
  }

  ngOnInit() {
    this.isLoading = true;
    this.value = 'Play';
    this.radioDataService.getCurrentTrackLive().subscribe((current: any) => {
      this.current = current;
      this.isLoading = false;
    });
  }
}
