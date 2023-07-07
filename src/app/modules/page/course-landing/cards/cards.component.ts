import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  listCards = [
    {
      image: 'assets/images/cards/IC-00.png',
      alt: 'IC-00',
      title: 'Introducción al curso',
    },
    {
      image: 'assets/images/cards/IC-01.png',
      alt: 'IC-01',
      title: '1. Planifica tu viaje',
    },
    {
      image: 'assets/images/cards/IC-02.png',
      alt: 'IC-02',
      title: '2. Cómo aprovechar el celular al máximo',
    },
    {
      image: 'assets/images/cards/IC-03.png',
      alt: 'IC-03',
      title: '3. Resalta la belleza de cada paisaje',
    },
    {
      image: 'assets/images/cards/IC-04.png',
      alt: 'IC-04',
      title: '4. La arquitectura y su majestuosidad',
    },
    {
      image: 'assets/images/cards/IC-05.png',
      alt: 'IC-05',
      title: '5. Provoca con tus fotos de alimentos',
    },
    {
      image: 'assets/images/cards/IC-06.png',
      alt: 'IC-06',
      title: '6. Poses creativas para tus fotos',
    },
    {
      image: 'assets/images/cards/IC-07.png',
      alt: 'IC-07',
      title: '7. Color y vestimenta',
    },
    {
      image: 'assets/images/cards/IC-08.png',
      alt: 'IC-08',
      title: '8. Los trucos de la edición',
    },
    {
      image: 'assets/images/cards/IC-09.png',
      alt: 'IC-09',
      title: '9. Publica tus mejores fotos en redes sociales',
    },
  ];
}
