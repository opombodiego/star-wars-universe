import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  loading?: boolean;
  responsiveOptions: any;
  moviesList: Array<any> = [];

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListMovies();
    this.configCarousel();
  }

  getListMovies() {
    this.loading = true;
    this.api.get('films')
      .then(data => this.moviesList = data.results)
      .catch(err => console.error(err))
      .finally(() => this.loading = false)
  }

  configCarousel() {
    this.responsiveOptions = [
      { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
      { breakpoint: '990px', numVisible: 2, numScroll: 2 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 }
    ];
  }

  showDetails(id) {
    this.router.navigate([`movies/details/${id}`]);
  }

}
