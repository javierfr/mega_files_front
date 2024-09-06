import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-reademail',
  templateUrl: './reademail.component.html',
  styleUrls: ['./reademail.component.scss']
})

/**
 * ReadMail Component
 */
export class ReademailComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  editor!: Editor;
  html!: '';


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Email' },
      { label: 'Read Email', active: true }
    ];
    this.editor = new Editor();
  }

  /**
   * Open modal
   * @param content content
   */
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  // editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
