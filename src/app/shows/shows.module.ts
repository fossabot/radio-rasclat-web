import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowsRoutingModule
  ],
  declarations: [ShowsComponent],
  providers: [QuoteService]
})
export class ShowsModule {}
