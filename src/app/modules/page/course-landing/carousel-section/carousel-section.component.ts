import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Autoplay,
  EffectCoverflow,
} from 'swiper';

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
]);

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
      disableOnInteraction: false,
    },
    breakpoints: {
      582: {
        slidesPerView: 4,
      },
    },
  };

  nameImages = [
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag1.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag2.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag3.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag4.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag5.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag6.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag7.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag8.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag9.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag10.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag11.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag12.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag13.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag14.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag15.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag16.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag17.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag18.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag19.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag20.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag21.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag22.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag23.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag24.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag25.jpg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag26.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag27.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag28.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag29.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEL+CURSO/imag30.jpeg',
  ];
}
