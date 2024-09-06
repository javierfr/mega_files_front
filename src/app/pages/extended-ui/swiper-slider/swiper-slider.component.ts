import { Component, ViewChild, OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';



@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss']
})

/**
 * Swiper Slider Component
 */
export class SwiperSliderComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  type: string = 'component';
  show: boolean = true;


  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'Swiper Slider', active: true }
    ];

  }

  slides = [
    {
      image: 'assets/images/small/img-1.jpg'
    },
    {
      image: 'assets/images/small/img-2.jpg'
    },
    {
      image: 'assets/images/small/img-3.jpg'
    },
    {
      image: 'assets/images/small/img-4.jpg'
    },
    {
      image: 'assets/images/small/img-5.jpg'
    }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": false,
    autoplay: true,
  };
  // custom fn for navigation
  nextSlide() {
    this.slickModal.slickNext();
  }
  prevSlide() {
    this.slickModal.slickPrev();
  }

  pagination = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": false,
    autoplay: true,
    dots: true,
  }
  Responsive = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": true,
    autoplay: true,
    dots: true,


    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  }
  /**
  * Swiper setting
  */
  config = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false
  };


  /**
  * Swiper Nav Config setting
  */
  paginationconfig = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: { el: '.swiper-pagination', clickable: true },
  };

}
