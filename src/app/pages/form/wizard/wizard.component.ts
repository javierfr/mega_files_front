import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

/**
 * Wizard Component
 */
export class WizardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  active = 1;
  sellerDetail!: UntypedFormGroup;
  compnyDetail!: UntypedFormGroup;
  bankDetail!: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form wizard', active: true }
    ];
  }

  change(event:any){
    console.log(event)
  }

}
