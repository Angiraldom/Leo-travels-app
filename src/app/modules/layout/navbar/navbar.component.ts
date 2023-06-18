import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private state: Store<AppState>) {}

  user!: any;

  ngOnInit(): void {
    this.state.select('cart').subscribe({
      next: (products) => {
        console.log(products)
      }
    });
    this.state.select('profile').subscribe({
      next: (user) => {
        console.log(user)
        this.user = user;
      }
    });
  }

}
