import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    ...modules
  ],
  exports: [...modules]
})
export class MaterialModule { }
