import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { slideModel } from './horizontal.model';
import { slides } from './data';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})

/**
 * Timeline horizontal component
 */
export class HorizontalComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  slides!: slideModel[];
  type: string = 'component';
  show: boolean = true;


  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesToShow: 4,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  }

  /**
   * Swiper setting
   */
  cardConfig = {
    initialSlide: 0,
    slidesToShow: 5,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb 
    */
    this.breadCrumbItems = [
      { label: 'Timeline' },
      { label: 'Horizontal Timline', active: true }
    ];
    this.slides = slides

  }

}
