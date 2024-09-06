import { Component, OnInit, ViewChild } from '@angular/core';

import { slideModel, blogModel } from './profile.model';
import { slides, blogs } from './data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {


  slides!: slideModel[];
  blogs!: blogModel[];
  type: string = 'component';
  show: boolean = true;

  /**
   * Swiper setting
   */
  config = {
    slidesToShow: 3,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * User grid data fetches
   */
  private _fetchData() {
    this.slides = slides;
    this.blogs = blogs;
  }

  nextSlide() {

  }
  prevSlide() {

  }
}
