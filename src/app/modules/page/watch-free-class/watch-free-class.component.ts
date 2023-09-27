import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-watch-free-class',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './watch-free-class.component.html',
  styleUrls: ['./watch-free-class.component.scss']
})
export default class WatchFreeClassComponent {

}
