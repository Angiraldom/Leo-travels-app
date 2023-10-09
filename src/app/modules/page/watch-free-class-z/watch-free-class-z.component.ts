import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-free-class-z',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './watch-free-class-z.component.html',
  styleUrls: ['./watch-free-class-z.component.scss']
})
export default class WatchFreeClassZComponent {
  private router = inject(Router);

  changeRoute() {
    this.router.navigate(['cursos']);
  }
}
