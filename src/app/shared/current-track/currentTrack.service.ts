import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class CurrentTrackService {
  constructor(public socket: Socket) {}
  getMessage() {
    return this.socket.fromEvent<any>('currentTrack').map(data => data);
  }
}
