import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  loading?: boolean;
  responsiveOptions: any;
  movieDetails: any;
  moviesCharacters: Array<object> = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.get('id')) {
        this.getMovieDetails(params.get('id'));
      } else {
        this.back()
      }
    });

    this.configCarousel();
  }

  getMovieDetails(movieID) {
    this.loading = true;
    this.api.get(`films/${movieID}`)
      .then(data => {
        this.movieDetails = data;
        this.getCharactersOfMovie(data.characters);
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
      });
  }

  async getCharactersOfMovie(chars) {
    const urls = chars.map(url => fetch(url).then(res => res.json()))
    await Promise.all(urls)
      .then(data => this.moviesCharacters = data)
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }

  configCarousel() {
    this.responsiveOptions = [
      { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
      { breakpoint: '990px', numVisible: 2, numScroll: 2 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 }
    ];
  }

  back() {
    this.router.navigate(['movies'])
  }
}
