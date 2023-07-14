import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.getProfile().subscribe();
  }

  logout() {
    this.authService.validateLogout();
  }

}
