import {Component} from '@angular/core';

@Component({
  selector: 'app-its-for-you-checks',
  templateUrl: './its-for-you-checks.component.html',
  styleUrls: ['./its-for-you-checks.component.scss']
})
export class ItsForYouChecksComponent {

  elementos: string[] = ['Anhelas capturar fotos más atractivas que mejoren tu imagen personal y te permitan destacar e impactar en redes sociales.',
    'Buscas estar actualizado y no quedarte obsoleto en el mundo de la fotografía.',
    'Disfrutas tomar muchas fotos y no te conformas con cualquier toma sino que quieres capturar imágenes realmente asombrosas.',
    'Solo usas la cámara de tu celular con la configuración automática y desaprovechas todas las funciones que hay en tu dispositivo'];
  elementoSeleccionados: number[] = [];

  switch(i: number) {
    if (this.elementoSeleccionados.includes(i, 0)) {
      this.elementoSeleccionados.slice(this.elementoSeleccionados.indexOf(i) + 1, 1)
    } else {
      this.elementoSeleccionados.push(i);
    }
  }
}
