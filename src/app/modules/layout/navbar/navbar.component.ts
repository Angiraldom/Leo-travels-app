import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private state: Store<AppState>) {}

  user!: any;

  ngOnInit(): void {
    this.state.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

}
