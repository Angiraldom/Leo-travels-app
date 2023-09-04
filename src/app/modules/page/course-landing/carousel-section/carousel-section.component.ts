import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  EffectCoverflow,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

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
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU++13.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+12.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+27.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+9.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+10.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+3.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+20.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+2.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+38.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+11.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+19.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+4.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+1.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+14.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+30.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+41.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+42.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+39.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+32.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+44.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+45.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+40.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+31.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+28.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+29.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+33.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+35.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+21.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+37.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+43.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+6.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+15.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+25.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+5.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+23.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+34.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+26+(1).webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+36.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+7.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+46.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+17.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+18.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+26.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+16.webp',
    'https://vilean.s3.us-east-2.amazonaws.com/CARRUSEEL+2+CURSO/CARRU+24.webp',
  ];
}
