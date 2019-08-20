import { Component, OnInit } from '@angular/core';

import { RadioDataService } from './../shared/radiodata.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: any;
  isLoading = false;

  constructor(private radioDataService: RadioDataService) {}

  ngOnInit() {
    this.isLoading = true;
    this.radioDataService
      .getSchedule()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(schedule => {
        this.schedule = schedule;
      });
  }
}
