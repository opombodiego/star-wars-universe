import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    ImageModule,
    MenubarModule,
    PaginatorModule,
    ProgressBarModule,
    TableModule,
    ToolbarModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    ImageModule,
    MenubarModule,
    PaginatorModule,
    ProgressBarModule,
    TableModule,
    ToolbarModule,
    LoadingComponent
  ]
})

export class SharedModule { }
