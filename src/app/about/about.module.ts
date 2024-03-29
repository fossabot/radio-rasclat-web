import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { IconsModule } from '@app/shared/icons/icons.module';
import { CoffeeComponent } from '@app/shared/coffee/coffee.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, IconsModule],
  declarations: [AboutComponent, CoffeeComponent]
})
export class AboutModule {}
