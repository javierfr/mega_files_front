import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from "ngx-editor";

import { EmailRoutingModule } from './email-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { SharedModule } from '../../shared/shared.module';
import { ReademailComponent } from './reademail/reademail.component';

@NgModule({
  declarations: [
    InboxComponent,
    ReademailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule,
    NgxEditorModule,
    NgbDropdownModule,
    NgbPaginationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmailModule { }
