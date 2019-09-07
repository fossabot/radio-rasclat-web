import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { QuoteService } from './quote.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowsRoutingModule,
    SwiperModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [ShowsComponent],
  providers: [QuoteService, Title]
})
export class ShowsModule {}
