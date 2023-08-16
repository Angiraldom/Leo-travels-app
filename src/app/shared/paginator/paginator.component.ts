import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends BaseClass implements OnDestroy {
  @Output() changePageEvent = new EventEmitter();
  @Input() totalRecords!: number;

  constructor() {
    super();
  }

  ngOnDestroy(): void {
    BaseClass.pageIndex = 0;
    BaseClass.pageSize = 10;
  }

  paginatorUpdate(event: PageEvent) {
    BaseClass.pageIndex = event.pageIndex;
    BaseClass.pageSize = event.pageSize;
    this.changePageEvent.emit();
  }
}
