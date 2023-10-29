import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  listCards = [
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-09.png',
      alt: 'IC-00',
      title: 'Introducción al curso',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-10.png',
      alt: 'IC-01',
      title: '1. Planifica tu viaje',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-11.png',
      alt: 'IC-02',
      title: '2. Cómo aprovechar el celular al máximo',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-12.png',
      alt: 'IC-03',
      title: '3. Resalta la belleza de cada paisaje',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-13.png',
      alt: 'IC-04',
      title: '4. La arquitectura y su majestuosidad',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-14.png',
      alt: 'IC-05',
      title: '5. Provoca con tus fotos de alimentos',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-15.png',
      alt: 'IC-06',
      title: '6. Poses creativas para tus fotos',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-16.png',
      alt: 'IC-07',
      title: '7. Color y vestimenta',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-17.png',
      alt: 'IC-08',
      title: '8. Los trucos de la edición',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-18.png',
      alt: 'IC-09',
      title: '9. Publica tus mejores fotos en redes sociales',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/IC-19.png',
      alt: 'IC-10',
      title: 'Cierre del curso',
    },
    {
      image: 'https://vilean.s3.us-east-2.amazonaws.com/PAG+CURSO/icono-actualizaciones.png ',
      alt: 'IC-11',
      title: 'Actualizaciones',
    },
  ];
}
