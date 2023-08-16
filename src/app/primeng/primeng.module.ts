import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';

const modules = [
  AccordionModule,
  ProgressBarModule,
  AvatarModule,
  ChipsModule,
  EditorModule,
  CardModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  FileUploadModule,
  SidebarModule,
  CarouselModule,
  DropdownModule,
  CalendarModule,
  MultiSelectModule,
  OverlayPanelModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: modules,
})
export class PrimengModule {}
