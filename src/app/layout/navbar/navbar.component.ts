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

  ngOnInit(): void {
    this.state.select('products').subscribe({
      next: (products) => {
        console.log(products)
      }
    });
  }

}
