import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [
    GoogleComponent,
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    LeafletModule,
    GoogleMapsModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule { }
