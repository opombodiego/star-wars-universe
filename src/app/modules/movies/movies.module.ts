import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { FormReviewComponent } from './components/form-review/form-review.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailsComponent,
    FormReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
