import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/listen.service';
import { AudioContext } from 'angular-audio-context';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [DataService]
})
export class FooterComponent implements OnInit {
  // message: string;
  //
  // constructor(private data: DataService, private _audioContext: AudioContext) {}
  //
  // public async beep(): Promise<void> {
  //   if (this._audioContext.state === 'suspended') {
  //     this.message = 'hi';
  //     await this._audioContext.resume();
  //   }
  //
  //   if (this._audioContext.state === 'running') {
  //     this.message = 'play';
  //   }
  //
  //   const oscillatorNode = this._audioContext.createOscillator();
  //
  //   oscillatorNode.onended = () => oscillatorNode.disconnect();
  //   oscillatorNode.connect(this._audioContext.destination);
  //
  //   oscillatorNode.start();
  //   oscillatorNode.stop(this._audioContext.currentTime + 0.5);
  // }
  //
  ngOnInit() {
    // this.data.currentMessage.subscribe(message => (this.message = message));
  }
}
