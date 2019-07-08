import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

import { MomentPipe } from '@app/schedule/MomentPipe';

@NgModule({
  imports: [CommonModule, TranslateModule, ScheduleRoutingModule],
  declarations: [ScheduleComponent, MomentPipe]
})
export class ScheduleModule {}
