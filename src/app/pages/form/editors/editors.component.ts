import { Component, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})

/**
 * Editors Component
 */
export class EditorsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  editor!: Editor;
  html!: '';

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form Editor', active: true }
    ];

    this.editor = new Editor();
  }
  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
