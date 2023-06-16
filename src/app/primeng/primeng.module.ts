import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

const modules = [TabViewModule, CardModule, InputTextModule, InputTextareaModule, InputNumberModule, FileUploadModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: modules
})
export class PrimengModule { }
