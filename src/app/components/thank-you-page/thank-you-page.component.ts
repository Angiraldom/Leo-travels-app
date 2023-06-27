import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export default class ThankYouPageComponent {
  // Se obtiene toda la info de la transaccion del storage.
  // Que pasa si yo entro varias veces a la pagina de agradecimiento ? deberia dejar entrar ?
  // Si solo se puede ingresar una vez por compra, entonces agregar una bandera en la bd.
  // Consultarlo en la bd y si es true no deja entrar aca. si sale error hacer render al home.
}
