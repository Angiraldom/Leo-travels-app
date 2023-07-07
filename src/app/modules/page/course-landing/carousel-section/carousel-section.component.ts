import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Autoplay,
  EffectCoverflow
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]);

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselSectionComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      582: {
        slidesPerView: 4,
      }
    }


  };

  nameImages = [
    '1653826090343-01.jpeg',
    'IMG_20220522_211436-01.jpeg',
    'IMG_20220523_134716-01.jpeg',
    'IMG_20220523_160559-01.jpeg',
    'IMG_20220525_175816-01-01.jpeg',
    'IMG_20220527_193002-01.jpeg',
    'IMG_20220527_202408-01.jpeg',
    'IMG_20220529_200419-01.jpeg',
    'IMG_20220530_133739-01.jpeg',
    'IMG_20220530_142327_773-01.jpeg',
    'IMG_20220530_193128-01.jpeg',
    'IMG_20220601_173802-01.jpeg',
    'IMG_20220602_171918-01.jpeg',
    'IMG_20220607_182234-01-01.jpeg',
    'IMG_20220607_183200-01.jpeg',
    'IMG_20220607_205749-01-01.jpeg',
    'IMG_20220608_123134-02.jpeg',
    'IMG_20220608_124359-01-01.jpeg',
    'IMG_20220608_125640-01-01.jpeg',
    'IMG_20220608_155906-01-01.jpeg',
    'IMG_20220608_184717-01.jpeg',
    'IMG_20220609_220402-01.jpeg',
    'IMG_20220610_105748-01-01.jpeg',
    'IMG_20220610_122754-01.jpeg',
    'IMG_20220612_164746.jpg',
    'IMG_20220612_210257-01.jpeg',
    'IMG_20220613_224604-01.jpeg',
    'IMG_20220614_161949-01.jpeg',
    'IMG_20220614_212221-01.jpeg',
    'IMG_20220614_233856-01.jpeg',
  ];
}
