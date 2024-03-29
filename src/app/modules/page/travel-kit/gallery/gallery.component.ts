import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  slides: string[] = [
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Bateria+portatil+1.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Disparador+1.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Kit+viajero+V.jpg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Pano+microfibra+provisional.jpg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Rinonera+1.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Tripode+1.jpeg',
    'https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Tula+1.jpeg',
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    touchMove: true,
  };
}
