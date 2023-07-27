import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {
  private authService = inject(AuthService);

  logout() {
    this.authService.validateLogout();
  }

}
