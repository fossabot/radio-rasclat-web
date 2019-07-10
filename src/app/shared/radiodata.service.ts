import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RadioDataService {
  constructor(private httpClient: HttpClient) {}

  getCurrentTrack(): Observable<string> {
    return this.httpClient
      .cache()
      .get('/radio/track/current')
      .pipe(
        map((body: any) => body.metadata),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  getCurrentShow(): Observable<string> {
    return this.httpClient
      .cache()
      .get('/radio/show/current')
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  getSchedule(): Observable<string> {
    return this.httpClient
      .cache()
      .get('/radio/schedule')
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
