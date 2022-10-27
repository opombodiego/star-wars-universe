import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  loading?: boolean;
  charactersList: Array<any> = [];
  totalRecords = 0;
  currentPage = 0;

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getListCharacters();
  }

  getListCharacters(page = 1) {
    this.loading = true;
    this.charactersList = [];
    this.api.get(`people/?page=${page}`)
      .then(data => {
        this.charactersList = data.results;
        this.totalRecords = data.count;
        this.currentPage = (page - 1) * 10;
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false)
  }

  onPageChange(e) {
    this.getListCharacters(e.page + 1)
  }

  back() {
    this.router.navigate(['dashboard'])
  }

}
