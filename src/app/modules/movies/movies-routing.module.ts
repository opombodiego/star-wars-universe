import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'details/:id', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule { }
