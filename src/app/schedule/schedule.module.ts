import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ScheduleRoutingModule],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {}
