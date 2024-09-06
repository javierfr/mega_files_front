import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxEditorModule } from "ngx-editor";
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { ValidationComponent } from './validation/validation.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { EditorsComponent } from './editors/editors.component';
import { UploadsComponent } from './uploads/uploads.component';
import { WizardComponent } from './wizard/wizard.component';
import { MaskComponent } from './mask/mask.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    BasicComponent,
    ValidationComponent,
    AdvancedComponent,
    EditorsComponent,
    UploadsComponent,
    WizardComponent,
    MaskComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule.forRoot({
      size: 'small'
    }),
    ColorPickerModule,
    CdkStepperModule,
    NgStepperModule,
    NgSelectModule,
    NgbDatepickerModule,
    FlatpickrModule.forRoot(),
    NgxEditorModule,
    DropzoneModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FormModule { }
