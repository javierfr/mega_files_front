import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { emailData } from './data';
import { Email } from './inbox.model';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

/**
 * Inbox Component
 */
export class InboxComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  emailData!: Array<Email>;
  emailIds: number[] = [];
  totalRecords = 0;
  startIndex = 1;
  endIndex = 15;
  page = 1;
  pageSize = 15;
  editor!: Editor;
  html!: '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Email' },
      { label: 'Inbox', active: true }
    ];
    this.editor = new Editor();
    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailData = emailData;
    this.totalRecords = emailData.length;
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
  /**
   * Confirmation mail model
   */
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.deleteMail();
        Swal.fire('Deleted!', 'Mail has been deleted.', 'success');
      }
    });
  }

  /***
   * Delete Mail
   */
  deleteMail() {
    const found = this.emailData.some(r => this.emailIds.indexOf(r.id) >= 0);
    if (found) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.emailIds.length; i++) {
        const obj: any = this.emailData.find(o => o.id === this.emailIds[i]);
        this.emailData.splice(this.emailData.indexOf(obj), 1);
      }
    }
    this.emailIds = [];
  }

  /***
   * send mail select multiple mail
   */
  selectMail(event: any, id: any) {
    if (event.target.checked) {
      this.emailIds.push(id);
    } else {
      this.emailIds.splice(this.emailIds.indexOf(id), 1);
    }
  }

  /**
   * Handle on page click event
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.emailData = emailData.slice(this.startIndex - 1, this.endIndex - 1);
  }

}
