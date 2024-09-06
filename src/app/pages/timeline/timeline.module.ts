import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { TimelineRoutingModule } from './timeline-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

@NgModule({
  declarations: [
    CenterComponent,
    LeftComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class TimelineModule { }
