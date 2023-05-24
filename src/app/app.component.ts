import { Component, inject } from '@angular/core';
import { CreateCourseComponent } from './products/create-course/create-course.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leo-travels-app';

  private dialog = inject(MatDialog);

  openModal() {
    this.dialog.open(CreateCourseComponent, {
    });
  }
}
