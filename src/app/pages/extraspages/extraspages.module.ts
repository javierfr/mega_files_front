import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { SimplebarAngularModule } from 'simplebar-angular';
// slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { SharedModule } from '../../shared/shared.module';
import { ExtraspagesRoutingModule } from './extraspages-routing.module';
import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    StarterComponent,
    ProfileComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExtraspagesRoutingModule,
    NgbDropdownModule,
    SlickCarouselModule,
    SimplebarAngularModule,
    NgbAccordionModule
  ]
})
export class ExtraspagesModule { }
