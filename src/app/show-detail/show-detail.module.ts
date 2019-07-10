import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowDetailRoutingModule } from './show-detail-routing.module';
import { ShowDetailComponent } from '@app/show-detail/show-detail.component';
import { QuoteService } from './../shows/quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowDetailRoutingModule
  ],
  declarations: [ShowDetailComponent],
  providers: [QuoteService]
})
export class ShowDetailModule {}
