import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})

/**
 * Form Validation Component
 */
export class ValidationComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // Form submition
  submit!: boolean;
  formsubmit!: boolean;
  typesubmit!: boolean;
  specificsubmit!: boolean;
  submitted = false;
  rangesubmit!: boolean;

  //  Validation form
  validationform!: UntypedFormGroup;
  tooltipvalidationform!: UntypedFormGroup;

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form Validation', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      agree: ['', [Validators.required]],
    });

    /**
     * Bootstrap tooltip validation form data
     */
    this.tooltipvalidationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });

  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.tooltipvalidationform.controls;
  }

}
