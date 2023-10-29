import {Component, Input} from '@angular/core';
import {IFaq} from "./IFaq";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() faqs: IFaq[] = [
    {
      title: "¿Este curso es solo para fotos  de viajes?",
      content: "<b>No</b>. El curso además de enseñar todo sobre planificación para el viaje, fotografía de paisajes, arquitectura y alimentos, también se especializa en cómo mejorar tus poses, entender los colores, la vestimenta, edición, publicación en redes sociales y manejo del celular. " +
        "<br><br><b>Todo lo que aprendas en el curso te servirá para aplicarlo en cualquier ocasión.</b>"
    },
    {
      title: "¿Hay una política de reembolso?",
      content: "<b>Sí.</b> Recuerda que estamos comprometidos con ayudarte a mejorar la captura de tus fotos y por eso estamos convencidos de que lo vas a conseguir. Aún así, <b> contamos con una garantía de satisfacción</b> en la que tienes 14 días para completar el curso y si aplicando todo lo que te enseñamos no logras mejorar tus fotos, te devolvemos todo tu dinero.\n" +
        "<br><br><p>Solo debes escribirnos a nuestro correo info@vilean.co y procederemos con tu caso.</p>"
    },
    {
      title: "¿Qué métodos de pago hay disponibles?",
      content: "La compra del curso se hace por medio de una pasarela de pago electrónico.<br><br>Allí encuentras todas las opciones:" +
        "<ul>" +
        "<li><b>Pago con tarjetas</b></li>" +
        "<li><b>Pago por PSE</b></li>" +
        "<li><b>Pago por transferencia</b></li>" +
        "<li><b>Pago en efectivo</b></li>" +
        "<br>" +
        "</ul>" +
        "Tú eliges el método de pago que mejor se acomode a tí."
    },
    {
      title: "¿En qué formato está hecho el curso?",
      content: "<p><b>El curso está en formato de vídeo, </b>por lo que va a ser muy fácil tu aprendizaje. Literalmente: Si te estamos enseñando cómo tomar fotos en el atardecer, vas a ver la clase en un atardecer en vivo y en directo.</p>" +
        "<br><p>Cada clase tiene además textos complementarios e imágenes para reforzar los conceptos. Allí verás también algunos ejercicios para que practiques lo aprendido en cada módulo</p>" +
        "<br><p>Y como valor agregado, el curso fue grabado en más de seis países para que te inspires con el contenido y te antojes a seguir viajando por el mundo entero :)</p>"
    },
    {
      title: "¿Qué es lo que realmente recibo al comprar el curso?",
      content: "<p>Recibirás un acceso único y personal en tu correo, para ingresar a nuestra plataforma donde está alojado el curso virtual.</p>" +
        "<br><p><b>Con tu usuario y contraseña podrás:</b></p>" +
        "<ul>" +
        "<li>Acceder a la plataforma de cursos desde tu celular o computador.</li>" +
        "<li>Ver todos los videos del curso de Fotografía para Viajes con tu Celular en cualquier lugar y hora, es 24/7.</li>" +
        "<li>Complementar tu aprendizaje con los textos, imágenes y ejercicios que tiene cada clase (ya son más de 35 clases).</li>" +
        "<li>Recibir atención personalizada, a través de la sección de comentarios que verás al final de cada clase.</li>" +
        "<li>Mantenerte al día con las próximas actualizaciones del curso, sin ningún costo extra.</li>" +
        "</ul>" +
        "<p>Y por supuesto, tendrás el beneficio exclusivo de adquirir descuentos especiales en los próximos cursos que lancemos por ser uno de nuestros estudiantes.</p>"
    },
    {
      title: "¿El curso está actualizado?",
      content: "<p><b>El curso está completamente actualizado.</b></p>" +
        "<br><p>Nos esforzamos en darte el mejor contenido posible y por eso añadimos clases cada que hay algo nuevo por aprender de acuerdo a las tendencias actuales del medio digital.</p>" +
        "<br><p>Y lo mejor de todo es que procuramos enseñarte cada concepto de la forma más sencilla y práctica posible, evitamos el tecnicismo avanzado para que no te sientas confundido y puedas aplicar realmente lo último en fotografía.</p>"
    },
    {
      title: "¿Qué tipo de celular debo tener?",
      content: "<p><b>En este curso entenderás que el celular es solo la herramienta. </b>Lo que en realidad marca la diferencia entre una foto bien tomada de otra que no, es la persona que tomó la foto.</p>" +
        "<br><p>Así que más allá del celular, la clave será desarrollar tu ojo fotográfico.</p>" +
        "<br><p>Aún así, si realmente disfrutas tomar muchas fotos para compartir en redes sociales, lo ideal es que tengas un celular gama media o alta ya que su tecnología permitirá que la imagen tenga una mayor resolución y calidad.</p>"
    },
    {
      title: "¿Puedo regalarle este curso a un amigo?",
      content: "<p><b>Claro que sí. </b> ¡Y nos encanta que lo estés pensando!</p>" +
        "<br><p>En caso de querer darlo como regalo, te damos dos opciones:</p>" +
        "<ul>" +
        "<li>Al momento de ingresar los datos para hacer el pago, debes poner el correo de tu amigo (no el tuyo). Ya que a este se le dará el acceso a la plataforma para ver el curso (recuerda que el envío del correo es inmediato).</li>" +
        "<li>Si quieres que sea un regalo sorpresa, antes de hacer el pago puedes escribirnos al WhatsApp y programaremos el envío del correo el día que vayas a darle la sorpresa.</li>" +
        "</ul>"
    },
    {
      title: "¿Quiénes son los creadores del curso?",
      content: "<p>Nosotros somos Leo y Angy, una pareja de esposos amantes de los viajes y la fotografía.</p>" +
        "<br><p>Leo lleva más de 10 años disfrutando y conociendo hermosos lugares alrededor del mundo.</p>" +
        "<br><p>Angy, diseñadora de profesión, decidió estudiar también fotografía. Le encanta enseñar y capturar fotos en todas sus salidas.</p>" +
        "<br><p>Si quieres leer más sobre nosotros, te invitamos a ver la sección \"Quiénes somos\" que encuentras en este sitio web www.vilean.co o también puedes ver nuestras fotos en instagram.</p>"
    }
  ];

  protected readonly Math = Math;
}
