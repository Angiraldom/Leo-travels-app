import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch-class',
  templateUrl: './watch-class.component.html',
  styleUrls: ['./watch-class.component.scss']
})
export class WatchClassComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  $route!: Subscription;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as string;
    });
  }
}
