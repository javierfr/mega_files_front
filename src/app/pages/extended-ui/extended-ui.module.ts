import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { NgxSliderModule } from 'ngx-slider-v2';
import { NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
// swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { extendedUiRoutingModule } from './extended-ui-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LightboxComponent } from './lightbox/lightbox.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ToastsContainer } from './notifications/toasts-container.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';

@NgModule({
  declarations: [
    LightboxComponent,
    RangesliderComponent,
    SweetalertComponent,
    RatingComponent,
    NotificationsComponent,
    ToastsContainer,
    SwiperSliderComponent
  ],
  imports: [
    CommonModule,
    extendedUiRoutingModule,
    SharedModule,
    LightboxModule,
    YouTubePlayerModule,
    NgxSliderModule,
    NgbRatingModule,
    NgbToastModule,
    SlickCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtendedUiModule { }
