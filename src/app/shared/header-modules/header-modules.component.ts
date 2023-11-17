import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header-modules',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './header-modules.component.html',
  styleUrls: ['./header-modules.component.scss'],
})
export class HeaderModulesComponent implements OnInit {
  fb = inject(FormBuilder);
  @Input() title = '';
  @Input() description = '';
  @Input() removeButton = true;
  @Input() fields: { field: string; fieldName: string }[] = [];
  @Output() handleClick = new EventEmitter();
  @Output() handleFilter = new EventEmitter();

  formFilter: FormGroup = this.fb.group(
    {
      valueFilter: [],
      fieldFilter: [],
    }
  );

  ngOnInit(): void {
    this.formFilter.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        if (value.valueFilter && value.fieldFilter) { 
          this.handleFilter.emit({[value.fieldFilter]: { $regex: value.valueFilter, $options:'i' }});
        } else {
          this.handleFilter.emit({});
        }
      },
    });
  }

  onHandleClick() {
    this.handleClick.emit();
  }
}
